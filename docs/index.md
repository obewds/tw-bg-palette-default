---
head:
  - - link
    - rel: icon
      href: favicon.ico
---




# @obewds/tw-bg-palette-default

Welcome to the docs page for OBE:WDS's `twBgPaletteDefault` component for [Vue.js](https://vuejs.org/)!



---

### ⚠️ Project Depreciated ⚠️

**This project has been depreciated. Use [VueVentus](https://vueventus.com/) (via [github](https://github.com/obewds/vueventus) or via [npm](https://www.npmjs.com/package/@obewds/vueventus)), which is the result of this project, and has this functionality along with much more.**

---




## Installation

```bash
npm install @obewds/tw-bg-palette-default --save-dev
```

<br>




## Object Schema

The object returned when importing Tailwind CSS background default color palette has the following schema:

```javascript
{
    'default': {
        colors: {
            'default': '',
            'error': '...',
            'primary': '...',
            'secondary': '...',
            'success': '...',
        },
    },
}
```

<br>





## Use Example

```html{3,8,16}
<script setup lang="ts">

    import { twBgPaletteDefault } from '@obewds/tw-bg-palette-default'

    const props = defineProps({
        bgClasses: {
            type: String,
            default: twBgPaletteDefault.default.colors.primary,
        },
    })

</script>

<template>

    <div :class="bgClasses">
        {{ bgClasses }}
    </div>

</template>
```




## Uninstall

```bash
npm uninstall @obewds/tw-bg-palette-default
```



<!--
## Markdown Examples

::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: tip CUSTOM TITLE
This is a dangerous warning
:::

::: details
This is a details block, which does not work in Internet Explorer or old versions of Edge.
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
-->
