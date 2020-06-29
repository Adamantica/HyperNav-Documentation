# Menu Structure

This page documents the structure of the navigation menu in HyperNav. The 
code is interchangeable between both top and side navigation menus, however,
only the top navigation menu has been used in these examples for convenience.
To replicate the same behavior for side navigation menus, just exchange the
class `.hn-top` with `.hn-side`.

## Basic Structure

All HyperNav navigation menus should have a basic structure as presented
below. The content of the element with the class `.hn-section-brand` is visible
regardless of the device size, while the content of the element with the 
class `.hn-section-body` will be hidden behind a toggleable menu on mobile
devices.

<div class="example only-code" data-src="examples/basic.html"></div>

## Navigation Content Alignment

Sometimes you might want to align some navigation items to the start
and some to the end. This can be achieved by adding an element
with the class `.hn-spacer`. All `.hn-spacer` elements have an equal width
and height. More specifically, they have `flex: 1`, which allows for many 
content alignments.

<div class="example only-code" data-src="examples/alignment.html"></div>

## Toggleable Menu

Often navigation menus should look somewhat different on mobile and desktop
devices, due to the available screen space. This is why HyperNav supports
a toggleable menu (usually a hamburger icon).

<div class="example only-code" data-src="examples/toggleable.html"></div>

## Toggleable Menu with Overlay

Often an overlay for the toggleable menu should be used, so that the content
below the navigation menu (the actual page content) gets darker. Additionally,
the navigation menu is usually closed by clicking on this region.

<div class="example only-code" data-src="examples/toggleable-with-overlay.html"></div>
