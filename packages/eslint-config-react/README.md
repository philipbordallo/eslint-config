# eslint-config-react
> A config for React projects

[![NPM Version][npm-img]][npm-url]

See [`src/configs/react.js`](../../src/configs/react.js) for how it's fully setup or check the [generated file](https://unpkg.com/@philipbordallo/eslint-config-react).


## Install

```sh
# npm
npm add @philipbordallo/eslint-config-react --save-dev

# yarn
yarn add @philipbordallo/eslint-config-react --dev
```

### Add dependencies

- [`eslint`](https://www.npmjs.com/package/eslint)
- [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)

```sh
# npm
npm add eslint eslint-plugin-jsx-a11y eslint-plugin-react --save-dev

# yarn
yarn add eslint eslint-plugin-jsx-a11y eslint-plugin-react --dev
```


## Setup

```js
module.exports = {
  extends: [
    '@philipbordallo/react',
  ],
};
```


[npm-img]: https://img.shields.io/npm/v/@philipbordallo/eslint-config-react.svg
[npm-url]: https://www.npmjs.com/package/@philipbordallo/eslint-config-react
