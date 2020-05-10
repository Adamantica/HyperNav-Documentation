# Input Item

This page documents the standard input item in HyperNav. 
These items provide the interactivity that is usually achieved
with JavaScript. Each input item has a separate state element and
the two are connected via an `id`.
The placement of the state element is important, while the placement 
of the input element itself is not. The appearance of the input elements 
can easily be changed according to the state by classes provided by HyperNav.
Make not of the usage of `input` and `label` elements.

## Structure

<div class="example only-code" data-src="examples/structure.html"></div>

## Menu Toggle (Hamburger Menu)

The menu toggle (usually the hamburger menu) has a specific syntax that has to be followed,
which essentially is just the addition of a few extra classes. This is due to the fact that 
the input state element and the input element tend to be separated in a different way.

<div class="example only-code" data-src="examples/hamburger.html"></div>

## Asymmetric Input Item

An asymmetric input item has different functions depending on the current state. This 
is seldom needed.

<div class="example only-code" data-src="examples/asymmetric-input.html"></div>

## Initial State

The initial state of the input item can be manipulated by specifying the `checked` attribute.

<div class="example only-code" data-src="examples/initial-state.html"></div>