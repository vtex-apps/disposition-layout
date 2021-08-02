📢 Use this project, [contribute](https://github.com/vtex-apps/disposition-layout) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# DISPOSITION LAYOUT

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

A layout capable of ordering sections/blocks/components by **dragging** them on the site editor's interface.

✅ SEO-FRIENDLY

## Configuration

1. Add `vtex.disposition-layout` as a theme dependency in the `manifest.json` file
2. Declare your orderable components as children of `disposition-layout`
3. Add, as prop, an array with the numerical assigment of the given components; always start from `1`

### `disposition-layout` props

| Prop name | Type    | Description                                                      | Default value |
| --------- | ------- | ---------------------------------------------------------------- | ------------- |
| `order`   | `array` | An array of integers describing the numerical asigment and order | `undefined`   |

- `order` array:

| Type     | Description                              | Default value |
| -------- | ---------------------------------------- | ------------- |
| `number` | The numerical assigment of the component | `undefined`   |

## Modus Operandi

The best application is to declare the array length and numerical values corresponding to the length and order of the children array.

⚠️ Always use an ascending pattern starting from 1, as this array is correlated with the indices of the children

```json
"disposition-layout": {
    "children": [
      "flex-layout.row#one",
      "info-card#example",
      "flex-layout.row#two"
    ],
    "props": {
      "order": [1,2,3]
    }
  },
```

## Customization

`No CSS Handles are available yet for the app customization.`

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->
