# Documentation

HyperNav is an interactive CSS only web navigation menu framework. The interactivity is 
mainly provided by utilizing `input` elements of type `checkbox` combined with the CSS 
sibling operator `~`. This approach has many upsides,
such as continuing to work even if a user has disable JavaScript. The main downside is that
these `checkboxes` must be given unique `ids`, which then have to be matched against with `label`
elements. 

All of the CSS is prefixed with `hn-`, with the exception of the class `hyper-nav`. Thus, 
interference with any other CSS frameworks is improbable. For instance,
this website utilizes both HyperNav and Bulma without any issues.

HyperNav will probably have to be customized separately for each projects, as changing 
sizes and colors might be necessary to achieve a desired look. However, this is quite
straight forward due to the use of variables.




