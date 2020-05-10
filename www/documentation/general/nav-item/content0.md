# Navigation Item

This page documents the navigation item in HyperNav. 
Usually these items are links, but other times they may be 
used more like buttons.

## Basic

The basic navigation item.

<div class="example only-code" data-src="examples/structure.html"></div>

## Bold Displacement Fix

The `font-weight` property affects layout dimensions, which can be problematic
if, for example, when an active navigation item should be displayed with bold text.
Read an article about the problem [here](https://www.sitepoint.com/quick-tip-fixing-font-weight-problem-hover-states/).
To fix this in HyperNav you should give the element with class `.hn-content` the attribute 
`data-hn-content`, which should have the same value as the element itself.

<div class="example only-code" data-src="examples/bold-displacement-fix.html"></div>

## Navigation and Input Item Combination Full

A combination of the navigation and input items. This combination is such
that the entire combination works as an input item. In other words, the 
combination can not work as a link.

<div class="example only-code" data-src="examples/nav-input-full.html"></div>

## Navigation and Input Item Combination Separate

A combination of the navigation and input items. This combination is such
that the combination looks like one element, but does still work as both
a link and an input item, depending on where the user clicks. Note the usage
of the extra class `.hn-link`, which acts as the link.

<div class="example only-code" data-src="examples/nav-input-separate.html"></div>

## Active State

The currently active navigation item should also have the class `.hn-active`.
If a child navigation item is active, then the class `.hn-active-child` should 
be used instead. These classes are not necessary, but they make sure that the
correct colors get applied to the items.