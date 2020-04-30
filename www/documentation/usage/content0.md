# Usage

Clone (or download) the [HyperNav GitHub repository](https://github.com/Adamantica/HyperNav) and link to 
the file `hyper-nav-without-css-vars.min.css` from a HTML document. You should then copy the file 
`hyper-nav-css-vars.min.css` to a location of your choosing and link to it as well. Change 
the variable declarations here to affect the behavior of HyperNav.

```
<link rel="stylesheet" href="path/to/HyperNav/dist/hyper-nav-without-css-vars.min.css"/>
<link rel="stylesheet" href="path/to/your/copy/of/hyper-css-vars.min.css"/>
```

## Alternative Usage

Link to `hyper-nav.min.css` from your HTML document. This will include everything that HyperNav needs.
Both the default definitions for the CSS variables and the CSS classes will be imported. However, this
is not the recommended way, because the CSS variables will most likely have to be overridden, which would
effectively mean that you have some unnecessary definitions.

```
<link rel="stylesheet" href="path/to/HyperNav/dist/hyper-nav.min.css"/>
```

## CSS Variable Ponyfill

CSS variables are not supported on IE11, but [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill) 
exists for this. For IE11 compatibility you should either use this library or you should convert all CSS variables
to SCSS variables.