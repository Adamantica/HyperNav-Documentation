# Collapsible Example

The HyperNav side navigation menu supports a collapsed state on both mobile and
desktop devices. The collapsed state is infinitely nestable and depends on
icons for proper user experience. Additionally, the collapsed state does not
support elements of the type "Navigation and Input Item Combination Full" 
([see nav item documentation](/documentation/general/nav-item/)).

## Default

In this example the state (whether the menu is collapsed or not) will
carry over between device sizes, which will be relevant if you expect 
that your users resize the website.

<div class="example side" data-src="examples/default.html"></div>

## Device Dependent State

Sometimes it might be preferrable to maintain a separate device dependent 
state. To achieve this we can leverage the classes `.hn-hide-desktop` and
`.hn-hide-mobile`. 

<div class="example side" data-src="examples/device-dependent.html"></div>

## Initial State

The initial state can be manipulated by specifying the `checked` attribute for
an input element.

<div class="example side" data-src="examples/device-dependent-initial-state.html"></div>