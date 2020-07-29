# Variables

HyperNav utilizes CSS variables via an SCSS interface. That is the variables are declared as follows:  
CSS: `--hn-variable-name: 5rem;`  
SCSS: `$hn-variable-name: var(--hn-variable-name);`  

The majority of the variables in HyperNav follow this pattern, however, some variables are SCSS only due to
limitations in CSS. See the list of all variables below.

This means that should you wish to only use SCSS variables you can do so with relative ease. However,
the default behavior is provided by CSS variables. CSS variables provide many benefits, such as easy replication
of critical styling options in other elements, for example, one may wish to use the same background color
for a HyperNav element in a custom element, without hardcoding the color. Note that CSS variables are 
not supported on IE11, but [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill) exists for 
this.

## List of SCSS Only Variables

`$hn-mobile-breakpoint: 767px;`  
Device widths below or equal to this value are considered mobile devices.
Should not overlap with `$hn-desktop-breakpoint`.

`$hn-desktop-breakpoint: 768px;`  
Device widths above or equal to this value are considered desktop devices.
Should not overlap with `$hn-mobile-breakpoint`.

`$hn-mode-count: 4;`  
The maximum number of top navigation modes.

`$hn-nesting-max-depth: 3;`  
The maximum depth at which navigation items still get indented.

`$hn-base-z-index: 1000;`  
`$hn-mode-z-index: $hn-base-z-index + 1000000;`  
`$hn-top-z-index: $hn-base-z-index + 100000;`  
`$hn-side-z-index: $hn-base-z-index  + 10000;`  
`$hn-nav-z-index: $hn-base-z-index + 1000;`  
`$hn-overlay-z-index: $hn-base-z-index + 100;`  
`$hn-side-container-z-index: $hn-mode-z-index + 3;`  
`$hn-side-container-nav-z-index: $hn-mode-z-index + 2;`  
`$hn-side-container-overlay-z-index: $hn-mode-z-index + 1;`  
`$hn-side-container-top-offset-z-index: $hn-base-z-index + 4;`  
`$hn-side-container-top-offset-menu-z-index: $hn-base-z-index + 3;`  
`$hn-side-container-top-offset-nav-z-index: $hn-base-z-index + 2;`  
`$hn-side-container-top-offset-overlay-z-index: $hn-base-z-index + 1;`  
Bunch of z-indexes that control what is on top of what. Could
not be implemented as CSS variables because IE11 does not support
`calc` for this property.


## List of Other Variables

`--hn-bg: rgba(238, 239, 240, 1.00);`  
`--hn-color: rgba(25, 25, 25, 1.00);`  
`--hn-expand-body-bg: rgba(0, 0, 0, 0.1);`  

`--hn-item-bg: transparent;`  
`--hn-item-color: var(--hn-color);`  
`--hn-item-hover-bg: rgba(86, 86, 86, 1.00);`  
`--hn-item-hover-color: rgba(238, 239, 240, 1.00);`  

`--hn-item-active-bg: rgba(0, 0, 0, 0.40);`  
`--hn-item-active-color: rgba(255, 255, 255, 1.00);`  
`--hn-item-active-hover-bg: var(--hn-item-hover-bg);`  
`--hn-item-active-hover-color: var(--hn-item-hover-color);`  

`--hn-item-active-child-bg: rgba(0, 0, 0, 0.30);`  
`--hn-item-active-child-color: var(--hn-color);`  
`--hn-item-active-child-hover-bg: var(--hn-item-hover-bg);`  
`--hn-item-active-child-hover-color: var(--hn-item-hover-color);`  

`--hn-expand-expanded-item-bg: var(--hn-item-bg);`  
`--hn-expand-expanded-item-color: var(--hn-item-color);`  
`--hn-expand-expanded-item-hover-bg: var(--hn-item-hover-bg);`  
`--hn-expand-expanded-item-hover-color: var(--hn-item-hover-color);`  

`--hn-expand-expanded-item-active-bg: var(--hn-item-active-bg);`  
`--hn-expand-expanded-item-active-color: var(--hn-item-active-color);`  
`--hn-expand-expanded-item-active-hover-bg: var(--hn-item-active-hover-bg);`  
`--hn-expand-expanded-item-active-hover-color: var(--hn-item-active-hover-color);`  

`--hn-expand-expanded-item-active-child-bg: var(--hn-item-active-child-bg);`  
`--hn-expand-expanded-item-active-child-color: var(--hn-item-active-child-color);`  
`--hn-expand-expanded-item-active-child-hover-bg: var(--hn-item-active-child-hover-bg);`  
`--hn-expand-expanded-item-active-child-hover-color: var(--hn-item-active-child-hover-color);`  

`--hn-overlay-bg: rgba(0, 0, 0, 0.6);`  



`--hn-input-bg: transparent;`  
`--hn-input-color: inherit;`  

`--hn-input-hover-bg: rgba(0, 0, 0, 0.2);`  
`--hn-input-hover-color: inherit;`  

`--hn-input-active-bg: var(--hn-input-bg);`  
`--hn-input-active-color: var(--hn-input-color);`  

`--hn-input-active-hover-bg: var(--hn-input-hover-bg);`  
`--hn-input-active-hover-color: var(--hn-input-hover-color);`  



`--hn-side-width: 20rem;`  
`--hn-side-icon-width: 2.4rem;`  
`--hn-side-font-size: 1.4rem;`  
`--hn-side-shadow: 0 0 2rem 0 #000;`  

`--hn-side-item-min-height: 4rem;`  

`--hn-side-link-padding-top: 1rem;`  
`--hn-side-link-padding-right: 1rem;`  
`--hn-side-link-padding-bottom: 1rem;`  
`--hn-side-link-padding-left: 1rem;`  

`--hn-side-expand-link-padding-top: var(--hn-side-link-padding-top);`  
`--hn-side-expand-link-padding-right: var(--hn-side-link-padding-right);`  
`--hn-side-expand-link-padding-bottom: var(--hn-side-link-padding-bottom);`  
`--hn-side-expand-link-padding-left: var(--hn-side-link-padding-bottom);`  

`--hn-side-input-width: 4rem;`  

`--hn-side-collapsed-input-size: 1.2rem;`  
`--hn-side-collapsed-input-font-size: 1.2rem;`  
`--hn-side-collapsed-input-margin: 0rem;`  
`--hn-side-collapsed-input-padding: 0rem;`  
`--hn-side-collapsed-input-bg: transparent;`  
`--hn-side-collapsed-input-color: inherit;`  
`--hn-side-collapsed-input-hover-bg: transparent;`  
`--hn-side-collapsed-input-hover-color: var(--hn-item-hover-color);`  

`--hn-side-nesting-indentation: 1rem;`  



`--hn-top-height: 5rem;`  
`--hn-top-icon-width: 2.4rem;`  
`--hn-top-font-size: 1.6rem;`  
`--hn-top-shadow: 0px 0rem 1rem 0px #000;`  

`--hn-top-item-min-height: 4rem;`  

`--hn-top-link-padding-top: 1rem;`  
`--hn-top-link-padding-right: 1rem;`  
`--hn-top-link-padding-bottom: 1rem;`  
`--hn-top-link-padding-left: 1rem;`  

`--hn-top-expand-link-padding-top: var(--hn-top-link-padding-top);`  
`--hn-top-expand-link-padding-right: 0.4rem;`  
`--hn-top-expand-link-padding-bottom: var(--hn-top-link-padding-bottom);`  
`--hn-top-expand-link-padding-left: var(--hn-top-link-padding-bottom);`  

`--hn-top-input-width: 3rem;`  

`--hn-top-nesting-indentation: 1rem;`  
`--hn-top-desktop-expand-body-bg: var(--hn-bg);`  
`--hn-top-desktop-expand-body-border: transparent;`  
`--hn-top-desktop-expand-body-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.4), -0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.4), 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.4);`  