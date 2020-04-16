# Documentation

HyperNav is an interactive CSS only web navigation menu framework. The interactivity is 
mainly provided by utilizing `input` elements of type `checkbox` combined with the CSS 
sibling operator `~`. This approach has many upsides,
such as continuing to work even if a user has disable JavaScript. The main downside is that
these `checkboxes` must be given unique `ids`, which then have to be matched against with `label`
elements. 

HyperNav will probably have to be customized separately for each projects, as changing 
sizes and colors might be necessary to achieve a desired look. However, this is quite
straight forward due to the use of variables.

## Recommended Usage

Clone (or download) the [HyperNav GitHub repository](https://github.com/Adamantica/HyperNav) and then 
link to the files `hyper-nav-without-css-vars.min.css` and `hyper-nav-css-vars.min.css` from a HTML
document. You should then change the values of the variables in `hyper-nav-css-vars.min.css` to affect 
the behavior of HyperNav (the variables can also be changed from a different stylesheet, but it is a 
good idea to start with the default values first).

```
<link rel="stylesheet" href="path/to/HyperNav/dist/hyper-nav-css-vars.min.css"/>
<link rel="stylesheet" href="path/to/HyperNav/dist/hyper-nav-without-css-vars.min.css"/>
```

## Alternative Usage

Link to `hyper-nav.min.css` from your HTML document. This will include everything that HyperNav needs.
Both the default definitions for the CSS variables and the CSS classes will be imported. However, this
is not the recommended way, because the CSS variables will most likely have to be overridden.

```
<link rel="stylesheet" href="path/to/HyperNav/dist/hyper-nav.min.css"/>
```

## Variables

HyperNav utilizes CSS variables via an SCSS interface. That is the variables are declared as follows:  
SCSS: `$hn-top-height: var(--hn-top-height)`  
CSS: `--hn-top-height: 5rem`

This means that should you wish to only use SCSS variables you can do so with relative ease. However,
the default behavior is provided by CSS variables. CSS variables provide many benefits, such as easy replication
of critical styling options in other elements, for example, one may wish to use the same background color
for an element in HyperNav and a custom element, with the constraint that the background color is defined 
only once. 

The variables that affect certain portions of HyperNav are documented on their respective pages and
a complete overview of the variables is provided [here](/documentation/variables).

## CSS

All of the CSS is prefixed with `hn-`, with the exception of the class `hyper-nav`. Thus, 
interference with any other CSS frameworks is improbable. For instance,
this website utilizes both HyperNav and Bulma without any issues.

### CSS Variable Ponyfill

CSS variables are not supported on IE11, but [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill) 
exists for this. For IE11 compatibility you should either use this library or you should convert all CSS variables
to SCSS variables.


