---
title: React Dates
author: Matt McCorry
date: 2021-03-17
tags: React,TypeScript
---

# React Dates

Working with dates in React causes problems.  JSON has no date format, so the API will serve up strings with the dates in ISO format.

This causes a number of issues.  Sometimes dates from the API will be strings, but dates created on the client side will be Date objects, meaning that when we access the property, we need to allow for parsing the dates before access.  Some argue that using Date objects is dangerous, as they are mutable.  They suggest storing everything as strings, which need to be parsed, or as numbers which allows sorting, but still needs expensive conversion before display.

## TS Date

[ts-date](https://www.npmjs.com/package/ts-date) is an immutable date wrapper package.  It allows us to store dates as ValidDates in Redux without having to worry about them becoming mutated.  It has performance similar to native Date objects, so it it fast to sort or display. It has another benefit of only allowing valid dates to be used, unlike the traditional JavaScript Date object

## TypeScript Model Overrides

I know I want to use ValidDate objects as the container for my dates, I just need need to do the conversion from a string.  I prefer to do this immediately after getting the data from the API, something like this just mapping the date fields:

```JavaScript
const response = await fetch(`/api/notifications/${eventId}`);
const events = await extract(response);

return events.map(({ created, ...rest }) => ({
    ...rest,
    created: parseIsoOrThrow(created),
}));
```

This works fine, but I prefer TypeScript, and I want the best coverage I can get.  TypeScript has an interesting trick to help with this.  Is is possible to override properties of an object, so I can have my application model containing ValidDate, but I can create a new type from it where the date field is a string.

Consider this type:
```TypeScript
type Override<T, P> = P & Omit<T, keyof P>;
```

This will take the type T, remove the properties that exist in P, then add the all the properties of P to it.  Usage example:
```TypeScript
interface Notification {
    readonly notificationId: number;
    readonly eventId: number;
    readonly message: string;
    readonly created: ValidDate;
}
type ApiNotification = Override<
    Notification,
    { readonly created: string }
>;
```

This is the cleanest solution I have found so far, it may be possible to improve upon it, ideally I would find a way to restrict is so that the properties in the overriding object must exist in the overridden, but I have found this to be good enough. Now if the Notification object is changed, the change is reflected in the ApiNotification object.

Putting it together:
```TypeScript
const response = await fetch(`/api/notifications/${eventId}`);
type ApiNotification = Override<
    Notification,
    { readonly created: string }
>;
const events = await extract<readonly ApiNotification[]>(response);

return events.map(({ created, ...rest }) => ({
    ...rest,
    created: parseIsoOrThrow(created),
}));
```

This pattern is also good for when you have an model shared with an API, but in the UI you want to allow some field to be optional for instance.