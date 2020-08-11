# eslint-config-react
> A config for TypeScript projects

[![NPM Version][npm-img]][npm-url]

See [`src/configs/react.js`](../../src/configs/typescript.js) for how it's fully setup or check the [generated file](https://unpkg.com/@philipbordallo/eslint-config-typescript).


## Install

```sh
# npm
npm add @philipbordallo/eslint-config-typescript --save-dev

# yarn
yarn add @philipbordallo/eslint-config-typescript --dev
```

### Add dependencies

- [`eslint`](https://www.npmjs.com/package/eslint)
- [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)
- [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

```sh
# npm
npm add eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev

# yarn
yarn add eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
```


## Setup

```js
module.exports = {
  extends: [
    '@philipbordallo/typescript',
  ],
  parser: '@typescript-eslint/parser',
};
```


[npm-img]: https://img.shields.io/npm/v/@philipbordallo/eslint-config-react.svg
[npm-url]: https://www.npmjs.com/package/@philipbordallo/eslint-config-react
