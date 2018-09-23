# eslint-config
> A basic config for most projects

[![NPM Version][npm-img]][npm-url]

See [`src/configs/default.js`](../../src/configs/default.js) for how it's fully setup.


## Install

```sh
# npm
npm add @philipbordallo/eslint-config --save-dev

# yarn
yarn add @philipbordallo/eslint-config --dev
```

### Add dependencies

- [`eslint`](https://www.npmjs.com/package/eslint)

```sh
# npm
npm add eslint --save-dev

# yarn
yarn add eslint --dev
```


## Setup

```js
module.exports = {
  extends: [
    '@philipbordallo',
  ],
};
```


[npm-img]: https://img.shields.io/npm/v/@philipbordallo/eslint-config.svg
[npm-url]: https://www.npmjs.com/package/@philipbordallo/eslint-config
