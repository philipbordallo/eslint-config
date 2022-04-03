<!-- GENERATED -->
# {{ name }}
> {{ description }}

[![NPM Version][npm-img]][npm-url]

See [`{{ configFile }}`](../../{{ configFile }}) for how it's fully setup or check the [generated file](https://unpkg.com/{{ name }}).


## Install
Add as a `devDependency` with your favorite package manager.

```sh
npm add -D {{ name }}
```

### Peer Dependencies

{{# peerDependencies }}
- [`{{ peer }}`](https://www.npmjs.com/package/{{ peer }})
{{/ peerDependencies }}

If you are using npm v7 or greater these should automatically be installed. Otherwise use your package manager to add them as `devDependencies` manually.

```sh
npm add -D{{# peerDependencies }} {{ peer }}{{/ peerDependencies }}
```


## Setup

```js
module.exports = {
  extends: [
    '@philipbordallo',{{# configName }}
    '{{ configName }}',{{/ configName }}
  ],
};
```


[npm-img]: https://img.shields.io/npm/v/{{ name }}.svg
[npm-url]: https://www.npmjs.com/package/{{ name }}
