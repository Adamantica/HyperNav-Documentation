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

## CSS

All of the CSS is prefixed with `hn-`, with the exception of the class `hyper-nav`. Thus 
interference with any other CSS frameworks is improbable. For instance,
this website utilizes both HyperNav and Bulma without any issues.

## Variables

HyperNav utilizes CSS variables via an SCSS interface. That is the variables are declared as follows:  
SCSS: `$hn-top-height: var(--hn-top-height)`  
CSS: `--hn-top-height: 5rem`

This means that should you wish to only use SCSS variables you can do so with relative ease. However,
the default behavior is with CSS variables. CSS variables provide many benefits, such as easy replication
of critical styling options in other elements, for example, one may wish to use the same background color
for an element in HyperNav and a custom element, with the constraint that the background color is defined 
only once. CSS variables are not supported on IE11, but [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill) 
exists for this.

The variables that affect certain portions of HyperNav are documented on their respective pages and
a complete overview of the variables is provided [here](/documentation/variables).