# Variables

HyperNav utilizes CSS variables via an SCSS interface. That is the variables are declared as follows:  
CSS: `--hn-top-height: 5rem`  
SCSS: `$hn-top-height: var(--hn-top-height)`  

This means that should you wish to only use SCSS variables you can do so with relative ease. However,
the default behavior is provided by CSS variables. CSS variables provide many benefits, such as easy replication
of critical styling options in other elements, for example, one may wish to use the same background color
for a HyperNav element in a custom element, without hardcoding the color.