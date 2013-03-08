klei-rework-plugins
===================

A collection of plugins for the CSS Preprocessor [rework](https://github.com/visionmedia/rework).

## Installation

```bash
npm install klei-rework-plugins
```

## Usage

An example of how to use `klei-rework-plugins`:

```javascript
var rework = require('rework'),
    plugins = require('klei-rework-plugins');

var css = rework(cssString).use(plugins.<pluginname>()).toString();
```

For available plugins see plugins section below.

## Plugins

### .calc()

Add calculations support. A feature to do simple calculations, and can be
particularly useful together with the rework core .vars() plugin.

When multiple units are mixed together in the same expression, the calc() statement
is left as is, to fallback to the CSS3 Calc feature.

**Example** (with .vars() enabled as well):

```css
:root {
  var-main-font-size: 16px;
}

body {
  font-size: var(main-font-size);
}

h1 {
  font-size: calc(var(main-font-size) * 2);
  height: calc(100px - 2em);
}
```

**yields**:

```css
:root {
  var-main-font-size: 16px
}

body {
  font-size: 16px
}

h1 {
  font-size: 32px;
  height: calc(100px - 2em)
}
```

## Unit tests

Make sure the dev-dependencies are installed, and then run:

```bash
npm test
```

## Contributing

`klei-rework-plugins` uses the [Git Flow](http://nvie.com/posts/a-successful-git-branching-model/) branching model so make your pull requests to the `develop` branch.

## License

MIT
