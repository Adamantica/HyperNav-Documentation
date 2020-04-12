# Introduction

All HyperNav navigation menus should have a basic structure as presented
below. The contents of the element with the class `.hn-section-brand` is visible
regardless of the device size, while the contents of the element with the 
class `.hn-section-body` will be hidden behind a navigation menu on mobile
devices.

<div class="example only-code" data-src="/static/examples/general/introduction/structure.html"></div>

All basic navigation items should have the following structure.

<div class="example only-code" data-src="/static/examples/general/introduction/nav-item-structure.html"></div>

## First Example

This is (in practice) the simplest navigation menu that you
can create with HyperNav. It does not even support have a
hamburger menu.

<div class="example" data-src="/static/examples/general/introduction/first-example.html"></div>

## Spacing 1

Somtimes you might want to align some navigation items to the left
and some to the right. This can be achieved by adding an element
with the class `.hn-spacer`. All `.hn-spacer`s have an equal width,
which allows for almost arbitrary content alignments.

<div class="example" data-src="/static/examples/general/introduction/spacing1.html"></div>