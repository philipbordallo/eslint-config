# @philipbordallo/eslint-config-jest
> Personal ESLint config for Jest

[![NPM Version][npm-img]][npm-url]

See [`src/configs/jest.js`](../../src/configs/jest.js) for how it's fully setup or check the [generated file](https://unpkg.com/@philipbordallo/eslint-config-jest).


## Install

```sh
# npm
npm add --save-dev @philipbordallo/eslint-config-jest

# yarn
yarn add --dev @philipbordallo/eslint-config-jest
```

### Peer Dependencies

- [`eslint-plugin-jest`](https://www.npmjs.com/package/eslint-plugin-jest)
- [`eslint-plugin-jest-dom`](https://www.npmjs.com/package/eslint-plugin-jest-dom)
- [`eslint`](https://www.npmjs.com/package/eslint)

If you are using npm v7 or greater these should automatically be installed.

```sh
# npm
npm add --save-dev eslint-plugin-jest eslint-plugin-jest-dom eslint

# yarn
yarn add --dev eslint-plugin-jest eslint-plugin-jest-dom eslint
```


## Setup

```js
module.exports = {
  extends: [
    '@philipbordallo',
    '@philipbordallo/jest',
  ],
};
```


[npm-img]: https://img.shields.io/npm/v/@philipbordallo/eslint-config-jest.svg
[npm-url]: https://www.npmjs.com/package/@philipbordallo/eslint-config-jest
