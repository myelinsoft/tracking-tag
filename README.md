# Targeting Gates Tracking Tag 

[Site](https://myelinsoft.com/) |
[TG Help Center](https://help.widerplanet.com/)

[![npm version](https://img.shields.io/npm/v/trackingtag.svg?style=flat-square)](https://www.npmjs.com/package/trackingtag)
[![NPM Downloads](https://img.shields.io/npm/dm/trackingtag.svg?style=flat)](https://npmcharts.com/compare/trackingtag?minimal=true)
[![Install Size](https://packagephobia.now.sh/badge?p=trackingtag)](https://packagephobia.now.sh/result?p=trackingtag)


## Install

```shell
npm i tracking-tag
```

## Usage
### Home
```js
import { TgTag } from 'tracking-tag'

TgTag({
  ti: "Your AD ID",
  ty: "Home"
})
```

### Item
```js
import { TgTag } from 'tracking-tag'

TgTag({
  ti: "Your AD ID",
  ty: "Item",
  items:[
    {i:"Items ID",t:"Items Name"},
  ]
})
```

### Cart
```js
import { TgTag } from 'tracking-tag'

TgTag({
  ti: "Your AD ID",
  ty: "Cart",
  items:[
    {i:"Items ID",t:"Items Name"},
    {i:"Items ID",t:"Items Name"},
  ]
})
```

### PurchaseComplete
```js
import { TgTag } from 'tracking-tag'

TgTag({
  ti: "Your AD ID",
  ty: "PurchaseComplete",
  items:[
    {i:"Item ID", t:"Item Name1", p:"Item Price1", q:"1"},
    {i:"Item ID", t:"Item Name2", p:"Item Price2", q:"1"},
  ]
})
```

