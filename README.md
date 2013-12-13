klei-rework-plugins
===================

## **DEPRECATED!** _This repository is deprecated in favor of [rework-calc](https://github.com/klei-dev/rework-calc) and [rework-breakpoints](https://github.com/klei-dev/rework-breakpoints)!_

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

### .breakpoints()

Gives you a maintainable solution to handling media query breakpoints
for different devices, with a syntax that's easy to remember.

A breakpoint is declared with: `breakpoint-<name>: <type> <point>`, where:

  * `<name>` - is the name for the breakpoint (to use in your media query)
  * `<type>` - values: `min` or `max`
  * `<point>` - the actual breakpoint value in pixels (px)

**Example 1 - max breakpoint**:

```css
:root {
  breakpoint-mobile: max 340px;
}

@media mobile {
  /* all your mobile device styles goes here */
}
```

**yields**:

```css
@media only screen and (max-device-width: 340px) {
  /* styles... */
}
```

**Example 2 - min breakpoint**:

```css
:root {
  breakpoint-desk: min 1000px;
}

@media desk {
  /* all your desktop styles goes here */
}
```

**yields**:

```css
@media only screen and (min-device-width: 1000px) {
  /* styles... */
}
```

**Example 2 - multiple breakpoints**:

```css
:root {
  breakpoint-palm: max 340px;
  breakpoint-tab: max 700px;
  breakpoint-desk: min 1000px;
  breakpoint-desk-wide: min 1200px;
}

@media palm {
  /* all your palm device styles goes here */
}
@media tab {
  /* all tablet styles */
}
@media tab-and-down {
  /* styles for tablets and smaller devices */
}
@media tab-and-up {
  /* styles for tablets and bigger screens */
}
@media desk-and-down {
  /* styles for desktops and smaller devices */
}
@media desk-and-up {
  /* styles for desktop and bigger screens */
}
@media desk-wide {
  /* styles for big screens */
}
```

**yields**:

```css
@media only screen and (max-device-width: 340px) {
  /* styles... */
}
@media only screen and (min-device-width: 341px) and (max-device-width: 700px) {
  /* all tablet styles */
}
@media only screen and (max-device-width: 700px) {
  /* styles for tablets and smaller devices */
}
@media only screen and (min-device-width: 341px) {
  /* styles for tablets and bigger screens */
}
@media only screen and (max-device-width: 1199px) {
  /* styles for desktops and smaller devices */
}
@media only screen and (min-device-width: 1000px) {
  /* styles for desktop and bigger screens */
}
@media only screen and (min-device-width: 1200px) {
  /* styles for big screens */
}
```

*You get the point...*

## Unit tests

Make sure the dev-dependencies are installed, and then run:

```bash
npm test
```

## Contributing

`klei-rework-plugins` uses the [Git Flow](http://nvie.com/posts/a-successful-git-branching-model/) branching model so make your pull requests to the `develop` branch.

## License

MIT
