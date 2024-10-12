---
title: Processing WhenAll Results
author: Matt McCorry
date: 2024-10-09
tags: async,task,whenall
---

I've been working on a codebase at work. One of the standards we are tying to implement is removing usage of `Task.Result`

We had some old code where we ran a number of tasks in parallel, got the result and then created a final array of the data.

```csharp
var t1 = Task.Run(() => new[] { 1 });
var t2 = Task.Run(() => new[] { 2 });
await Task.WhenAll(t1, t2);
var finalArray = t1.Result.Concat(t2.Result);
```

Easy fix, just use the result of the WhenAll call, and unwrap the nested array.

```csharp
var t1 = Task.Run(() => new[] { 1 });
var t2 = Task.Run(() => new[] { 2 });
var finalArray = (await Task.WhenAll(t1, t2)).SelectMany(a => a); // [1, 2]
```

If the types of the tasks vary, WhenAll returns a Task with no content.

```csharp
var t1 = Task.Run(() => new[] { 1m });
var t2 = Task.Run(() => new[] { 2 });
var finalArray = await Task.WhenAll(t1, t2); // Build error
```

We can create a function to convert all the the Tasks to the same type, e.g. `Task<decimal[]>`

```csharp
async Task<decimal[]> ToDecimal(Task<int[]> t) => (await t).Select(Convert.ToDecimal).ToArray();
```

Giving us:

```csharp
var t1 = Task.Run(() => new[] { 1m });
var t2 = ToDecimal(Task.Run(() => new[] { 2 }));
var finalArray = (await Task.WhenAll(t1, t2)).SelectMany(a => a); // [1m, 2m]
```

It is possible to create generic converters to convert `Task<Child>` to `Task<Parent>` to simplify dealing with inherited task results.

In some cases, we want to process the results of the WhenAll individually.  In TypeScript, I would write something equivalent to:

```csharp
var t1 = Task.Run(() => new[] { 1 });
var t2 = Task.Run(() => new[] { 2 });
var [t1Result, t2Result] = await Task.WhenAll(t1, t2);
DoThingWith1(t1Result);
DoThingWith2(t2Result);
```

We can add a deconstructor like this:

```csharp
public static void Deconstruct<T>(this T[] array, out T s1, out T s2)
{
    s1 = array[0];
    s2 = array[1];
}
```

Then split the result of the WhenAll

```csharp
var t1 = Task.Run(() => new[] { 1 });
var t2 = Task.Run(() => new[] { 2 });
var (t1Result, t2Result) = await Task.WhenAll(t1, t2);
// deal with the results individually here
DoThingWith1(t1Result);
DoThingWith2(t2Result);
```

When using the deconstructor, we need to be careful that we don't missorder the results, as they will all be of the same type. Just make sure you put a unit test in to ensure the result mapping is correct.
