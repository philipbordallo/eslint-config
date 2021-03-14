# {{ name }}
> {{ description }}

[![NPM Version][npm-img]][npm-url]

See [`{{ configFile }}`](../../{{ configFile }}) for how it's fully setup or check the [generated file](https://unpkg.com/{{ name }}).


## Install

```sh
# npm
npm add --save-dev {{ name }}

# yarn
yarn add --dev {{ name }}
```

### Peer Dependencies

{{# peerDependencies }}
- [`{{ peer }}`](https://www.npmjs.com/package/{{ peer }})
{{/ peerDependencies }}

If you are using npm v7 or greater these should automatically be installed.

```sh
# npm
npm add --save-dev{{# peerDependencies }} {{ peer }}{{/ peerDependencies }}

# yarn
yarn add --dev{{# peerDependencies }} {{ peer }}{{/ peerDependencies }}
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
