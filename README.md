# Targeting Gates Tracking Tag 

[Site](https://myelinsoft.com/) |
[TG Help Center](https://help.widerplanet.com/)

[![npm version](https://img.shields.io/npm/v/trackingtag.svg?style=flat-square)](https://www.npmjs.com/package/tracking-tag)
[![NPM Downloads](https://img.shields.io/npm/dm/trackingtag.svg?style=flat)](https://npmcharts.com/compare/tracking-tag)
[![Install Size](https://packagephobia.now.sh/badge?p=trackingtag)](https://packagephobia.now.sh/result?p=tracking-tag)


## Install

```shell
npm i tracking-tag
```

## Usage
### Home
- 사이트 모든 영역에서 공통적으로 사용되는 파일 하단에 설치합니다.
- 공통 태그는 타 태그(아이템, 장바구니, 구매완료, 전환 완료)보다 하단에 위치하여야 합니다.
```js
import { TgTag } from 'tracking-tag'

TgTag({
  ti: "Your AD ID",
  ty: "Home"
})
```

### Item
- 상품 상세페이지 하단에 삽입하신 후 '상품 ID', '상품명' 변수를 'i', 't'에 대입합니다.
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
- 상품 리스트가 나오는 장바구니 페이지에 삽입합니다.
- 장바구니에 담긴 상품 개수만큼 ',{i:"상품ID", t:"상품명"}' 를 동적으로 생성 및 i, t 각각의 값에 해당 변수를 대입합니다.
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
- 구매한 상품 개수만큼 ',{i:"상품ID", t:"상품명", p:"단가", q:"수량"}' 을 동적으로 생성해주셔야 하며, i, t, p, q 각각의 값에 해당 변수를 대입합니다.
```js
import { TgTag } from 'tracking-tag'

TgTag({
  ti: "Your AD ID",
  ty: "PurchaseComplete",
  items:[
    {i:"Item ID", t:"Item Name1", p:"Item Price1", q:"Item quantity1"},
    {i:"Item ID", t:"Item Name2", p:"Item Price2", q:"Item quantity2"},
  ]
})
```

