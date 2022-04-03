<!-- GENERATED -->
# @philipbordallo/eslint-config-html
> Personal ESLint config for HTML

[![NPM Version][npm-img]][npm-url]

See [`src/configs/html.js`](../../src/configs/html.js) for how it's fully setup or check the [generated file](https://unpkg.com/@philipbordallo/eslint-config-html).


## Install
Add as a `devDependency` with your favorite package manager.

```sh
npm add -D @philipbordallo/eslint-config-html
```

### Peer Dependencies

- [`@html-eslint/eslint-plugin`](https://www.npmjs.com/package/@html-eslint/eslint-plugin)
- [`@html-eslint/parser`](https://www.npmjs.com/package/@html-eslint/parser)
- [`eslint`](https://www.npmjs.com/package/eslint)

If you are using npm v7 or greater these should automatically be installed. Otherwise use your package manager to add them as `devDependencies` manually.

```sh
npm add -D @html-eslint/eslint-plugin @html-eslint/parser eslint
```


## Setup

```js
module.exports = {
  extends: [
    '@philipbordallo',
    '@philipbordallo/html',
  ],
};
```


[npm-img]: https://img.shields.io/npm/v/@philipbordallo/eslint-config-html.svg
[npm-url]: https://www.npmjs.com/package/@philipbordallo/eslint-config-html
