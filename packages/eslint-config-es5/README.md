# eslint-config-es5
> A config for projects using ES5

[![NPM Version][npm-img]][npm-url]

See [`src/configs/es5.js`](../../src/configs/es5.js) for how it's fully setup or check the [generated file](https://unpkg.com/@philipbordallo/eslint-config-es5).


## Install

```sh
# npm
npm add @philipbordallo/eslint-config-es5 --save-dev

# yarn
yarn add @philipbordallo/eslint-config-es5 --dev
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
    '@philipbordallo/es5',
  ],
};
```


[npm-img]: https://img.shields.io/npm/v/@philipbordallo/eslint-config-es5.svg
[npm-url]: https://www.npmjs.com/package/@philipbordallo/eslint-config-es5
