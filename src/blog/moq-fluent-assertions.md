---
title: Using FluentAssertions with Moq
author: Matt McCorry
date: 2022-08-05
tags: Moq,FluentAssertions,C#
---

# FluentAssertions with Moq

For many years we (my team) have used [FluentAssertions](https://fluentassertions.com) to make assertions within unit tests.  It allows you to make assertions using structural equality.  Consider:
```csharp
var myObj1 = new Object() {val: 1};
var myObj2 = new Object() {val: 1};
myObj1.Should().BeEquivalentTo(myObj2);
```

Clearly `myObj1` and `myObj2` have different reference equality (as they are the product of separate new statements), but they have the same values inside, so can be considered equivalent to each other.  This is very handy, as it allows us to easily make assertions about the values of an object, this is especially useful when the object is instantiated inside the function we are testing, as we cannot mock it.

Often we have similar issues when setting up Moqs.  We want to ensure the values of the object passed into the function, but we cannot know the reference of the object.  This leads to the use of `It.IsAny<object>()` or `It.Is<object>(a => a.Foo == "Bar")`, which is quick, but is not very specific.  We can use the nuget
[FluentAssertions.ArgumentMatchers.Moq](https://github.com/ronaldbosma/FluentAssertions.ArgumentMatchers.Moq) to help.

```csharp
var mock = new Mock<IMyRepo>();
mock.Setup(a => a.DoTheThing(Its.EquivalentTo(tr), CancellationToken.None)).Returns(Task.CompletedTask);
```

Using `Its.EquivalentTo(obj)` instead of `It.Is(obj)` allows us to use structural equality.  This makes writing better tests easier. There are also options to skip certain properties if you wish.

We have all worked on project where `It.IsAny<object>()` has been used. It allows us to tick the box and say we wrote a test, but it is generally far too permissive.  This is an easy solution.
