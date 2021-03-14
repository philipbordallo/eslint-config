# @philipbordallo/eslint-config-typescript
> Personal ESLint config for TypeScript

[![NPM Version][npm-img]][npm-url]

See [`src/configs/typescript.js`](../../src/configs/typescript.js) for how it's fully setup or check the [generated file](https://unpkg.com/@philipbordallo/eslint-config-typescript).


## Install

```sh
# npm
npm add --save-dev @philipbordallo/eslint-config-typescript

# yarn
yarn add --dev @philipbordallo/eslint-config-typescript
```

### Peer Dependencies

- [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)
- [`eslint`](https://www.npmjs.com/package/eslint)
- [`typescript`](https://www.npmjs.com/package/typescript)

If you are using npm v7 or greater these should automatically be installed.

```sh
# npm
npm add --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint typescript

# yarn
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint typescript
```


## Setup

```js
module.exports = {
  extends: [
    '@philipbordallo',
    '@philipbordallo/typescript',
  ],
};
```


[npm-img]: https://img.shields.io/npm/v/@philipbordallo/eslint-config-typescript.svg
[npm-url]: https://www.npmjs.com/package/@philipbordallo/eslint-config-typescript
