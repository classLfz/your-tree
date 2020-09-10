---
layout: page.11ty.cjs
title: <your-tree> ⌲ Home
---

# &lt;your-tree>

`<your-tree>` is a tree element.

## As easy as HTML

<section class="columns">
  <div>

`<your-tree>` is just an HTML element. You can it anywhere you can use HTML!

```html
<your-tree></your-tree>
```

  </div>
  <div>

<your-tree></your-tree>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<your-tree>` can be configured with attributed in plain HTML.

```html
<your-tree data="[{'id': '1','name': 'item1'}]"></your-tree>
```

  </div>
  <div>

<your-tree data="[{'id': '1','name': 'item1'}]"></your-tree>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<your-tree>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const data=[{
  id: '1',
  name: 'item1',
  children: [{
    id: '1-1',
    name: 'item1-1'
  }]
}];

render(html`
  <h2>This is a &lt;your-tree&gt;</h2>
  <your-tree .data=${data}></your-tree>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;your-tree&gt;</h2>
<your-tree data="[{'id': '1','name': 'item1'}]"></your-tree>

  </div>
</section>
