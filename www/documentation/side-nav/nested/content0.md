# Nested Example

The side navigation menu can be nested, just as the top navigation menu.
This applies for both the collapsed and the expanded state, however,
the collapsed state does not support elements of the type "Navigation and 
Input Item Combination Separate" ([see nav item documentation](/documentation/general/nav-item/)).

Similar functionality as "Navigation and Input Item Combination Separate" could be implemented 
with some JavaScript or in some cases with server side rendering, but since HyperNav is a CSS only framework, 
this functionality is not documented here.

## Nested

Note the small plus (or minus) sign in the top right of each expandable 
item when the navigation menu is in the collapsed state. The small icons
get transformed to larger variants in the expanded state.

<div class="example side" data-src="examples/nested.html"></div>
