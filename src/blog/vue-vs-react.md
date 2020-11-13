---
title: VueJS vs React
author: Matt McCorry
date: 2020-11-13
---

## Impressions of Vue vs React

Whilst the two are client side JavaScript frameworks there are some major differences in the usage.

### Component Creation

In React, components can just be functions.  This means that to break out functionality into a new component is quick and simple, just pull out the JSX into a new function, add the props, and maybe the type definitions and you're done.  Maybe you want to move it to new file, but that's a decision for later.
```TypeScript
const MyComponent: FC<{name: string}> = ({name}) => <span>Hello {name}</span>
```

In VueJS by contrast, components require much more work.  You must create the template, script, and style sections. It must be a new file.
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
