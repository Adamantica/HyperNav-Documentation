# Variables

HyperNav utilizes CSS variables via an SCSS interface. That is the variables are declared as follows:  
CSS: `--hn-variable-name: 5rem;`  
SCSS: `$hn-variable-name: var(--hn-variable-name);`  

The majority of the variables in HyperNav follow this pattern, however, some variables are SCSS only due to
limitations in CSS. See the list of all variables below.

This means that should you wish to only use SCSS variables you can do so with relative ease. However,
the default behavior is provided by CSS variables. CSS variables provide many benefits, such as easy replication
of critical styling options in other elements, for example, one may wish to use the same background color
for a HyperNav element in a custom element, without hardcoding the color. Note that CSS variables are 
not supported on IE11, but [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill) exists for 
this.

## List of SCSS Only Variables

## List of Other Variables