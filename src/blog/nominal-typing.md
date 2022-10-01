---
title: Nominal Typing
author: Matt McCorry
date: 2021-04-09
tags: React,TypeScript
---

# Nominal Typing

## Problem

Recently I have been working on a new proof of concept product. For speed, much of the API returns dictionaries, then to access the data you just need to pass in the right ID. This works, is fast, but is not very easy to work with. I requires knowing which ID is required to access the data of the dictionary. It is not possible to name the key of the dictionary (e.g. customerId) to make it easier to work with. Yes, I could make a helper function like getCustomerDetails(customerDataDictionary, customerId), but that is less interesting.

## Single Case Union Types

F# (and others) has a feature called [single case union types](https://fsharpforfunandprofit.com/posts/designing-with-types-single-case-dus/).

```fsharp
type CustomerId = CustomerId of int
```

Essentially, they allow you to create a type wrapper around a type, so I can create a customerId that has an underlying type of int. If my function requires a CustomerId, I need to pass it one, an int will not do. By using this across my application I can avoid primitive obsession, but without having to pass objects around everywhere. This improves type checking, and readability as now more information is embedded in the type, rather than the parameter name.

## Nominal Types

In typescript we can create a type alias:

```typeScript
type CustomerId = number
```

which is better than nothing, but it is just an alias. We can type all customerIds as CustomerId, but numbers will be accepted too.

We need more than an alias, we need a named type that can be verified by the compiler, this is known as nominal typing.

# TypeScript Implementation

In the past, I have implemented nominal types by hand with something like this:

```typeScript
enum CustomerIdEnum {}
type CustomerId = number & CustomerIdEnum
```

However, there are also libraries that allow creation of these types such as [SimplyTyped](https://github.com/andnp/SimplyTyped)

```typeScript
type CustomerId = Nominal<number, 'customerId'>;
```

Using the library is a better option. As TypeScript progresses we might get a native solution to this, so it will be easier to strip out when it becomes available.
