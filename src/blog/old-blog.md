---
title: Old Blog
author: Matt McCorry
date: 2000-11-14
tags: React,VueJs,JavaScript
---

## Impressions of Vue vs React

Whilst the two are client side JavaScript frameworks there are some major differences in the usage.

### Component Creation

In React, components can just be functions. This means that to break out functionality into a new component is quick and simple, just pull out the JSX into a new function, add the props, and maybe the type definitions and you're done. Maybe you want to move it to new file, but that's a decision for later.

```TypeScript
const MyComponent: FC<{name: string}> = ({name}) =>
    <span>Hello {name}</span>
```

In VueJS by contrast, components require much more work. You must create the template, script, and style sections. It must be a new file.

```TypeScript
<Template>
    <div>Hello {{name}}</div>
</Template>
<script>
export default {
  name: 'myComponent'
  props: {
      name: String
  }
}
</script>
<style>
</style>
```

This resistance to breaking down components causes repetitive code bases.

### Debugging

Because JSX is just an alternative syntax for JavaScript, it can be debugged much like normal JavaScript, including breakpoints. In VueJS, we create a JavaScript and Template. They key difference here is that in the template, there is a script, but it's not really JavaScript `<div v-for="item in items" key="item.id"/>` and thus not easy to debug. If we are working in TypeScript, we also lose type checking in the template script.

The solution to the difficulties debugging code embedded in the template is to move the code into the class, probably in the computed values. This is good in a sense, in React it is possible to mix too much logic into the display logic.

### Immutability

React is very strict about immutability, if you mutate the model of your component, things will go wrong and you are firmly told not to do it. In VueJS, things are a bit more flexible. Some objects can be mutated and the component will react correctly, but some objects cannot be mutated e.g. maps. I much prefer the clear pattern in React of do not do this, rather than the VueJS suggestion that breaks at times and causes bugs.
