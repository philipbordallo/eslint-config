<!-- GENERATED -->
# @philipbordallo/eslint-config-react
> Personal ESLint config for React

[![NPM Version][npm-img]][npm-url]

See [`src/configs/react.js`](../../src/configs/react.js) for how it's fully setup or check the [generated file](https://unpkg.com/@philipbordallo/eslint-config-react).


## Install
Add as a `devDependency` with your favorite package manager.

```sh
npm add -D @philipbordallo/eslint-config-react
```

### Peer Dependencies

- [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)
- [`eslint`](https://www.npmjs.com/package/eslint)

If you are using npm v7 or greater these should automatically be installed. Otherwise use your package manager to install they manually.

```sh
npm add -D eslint-plugin-jsx-a11y eslint-plugin-react-hooks eslint-plugin-react eslint
```


## Setup

```js
module.exports = {
  extends: [
    '@philipbordallo',
    '@philipbordallo/react',
  ],
};
```


[npm-img]: https://img.shields.io/npm/v/@philipbordallo/eslint-config-react.svg
[npm-url]: https://www.npmjs.com/package/@philipbordallo/eslint-config-react
