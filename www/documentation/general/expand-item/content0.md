# Expand Item

This page documents the expand item in HyperNav. 
These items are expandable sub menus, which can take the form of
mega menus and dropdowns. These items should not be nested within 
`.hn-section-brand` as they will not work correctly on mobile devices.

## Basic

The basic expand item. This item acts as a single button and 
does not support a link.

<div class="example only-code" data-src="examples/structure.html"></div>

## Navigation and Input

This expand item supports both a navigation item and an input element.

<div class="example only-code" data-src="examples/nav-input.html"></div>

## Placement

You can change the behavior of the expand item with the following classes:

+ `.hn-expand-left`: The expand item expands to the left.
+ `.hn-expand-center`: The expand item expands so that it is aligned to the center.
+ `.hn-expand-mega`: The expand item functions as a mega menu.

These classes should be added to the element with the class `.hn-expand`
(the top most element in the examples on this page).

## Active State

The expand item itself has no active state, but the [directives](/documentation/general/nav-item/#active-state)
for `.hn-item` should still be followed for full compatibility. 