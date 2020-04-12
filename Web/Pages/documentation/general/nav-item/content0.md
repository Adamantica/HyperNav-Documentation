# Navigation Item

This page documents the navigation item in HyperNav. 
Usually these items are links, but other times they may be 
used more like buttons.

## Basic Example

The basic navigation item.

<div class="example only-code" data-src="/static/examples/general/nav-item/structure.html"></div>

## Bold Displacement Fix

The `font-weight` property affects layout dimensions, which can be problematic
if, for example, when an active navigation item should be displayed with bold text.
Read an article about the problem [here](https://www.sitepoint.com/quick-tip-fixing-font-weight-problem-hover-states/).
To fix this in HyperNav you should give the element with class `.hn-content` the attribute 
`data-hn-content`, which should have the same value as the element itself.

<div class="example only-code" data-src="/static/examples/general/nav-item/bold-displacement-fix.html"></div>

## Navigation and Input Item Combination 1

A combination of the navigation and input items. This combination is such
that the entire combination works as an input item. In other words, the 
combination can not work as a link.

<div class="example only-code" data-src="/static/examples/general/nav-item/nav-input-full.html"></div>

## Navigation and Input Item Combination 2

A combination of the navigation and input items. This combination is such
that the combination looks like one element, but does still work as both
a link and an input item, depending on where the user clicks. Note the usage
of the extra class `.hn-link`, which acts as the link.

<div class="example only-code" data-src="/static/examples/general/nav-item/nav-input-separate.html"></div>
