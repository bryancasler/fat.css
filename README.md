
# FAT.css
A (mostly) classless CSS framework that styles every HTML tag and isn't worried about being the smallest it can be.

## Differentiators
 * HTML Tags are Cross-Browser Normalized thanks to Normalize.css and Sanitize.css.
 * HTML Tags are individually styled. No groupings of similar HTML tags.
 * Every unit value is REM based.
 * Includes a style testing page that has every HTML element.
 * Intentionally no IE11 Support, There's no going back now.
 
## Notables
 * Most of the normalizations from normalize.css
 * Most of the opinionated normalizations from sanitize.css (Form, Typography ...)
 * Resets the box model to `border-box`.
 * Removes the margin and padding of all elements.
 * Sets the background of all elements to transparent and prevents background repeating.
 * Render text with grayscale antialiasing on high DPI screens.
 * Headings and typography are optimized for `rem` units.
 * Images and other media elements are responsive by default.
 * Removes the default styling for buttons and select elements.
 * Removes click delay on clickable elements on mobile devices.
 * Future-proof rule to remove focus outlines for mouse/pointer based interactions.
 * Accessibility helpers.
 * Styles optimized for printing.
 
# Inspirations
*  [normalize.css](https://github.com/necolas/normalize.css)
* [sanitize.css](https://github.com/csstools/sanitize.css)
* [Bootstrap](https://github.com/twbs/bootstrap)
* [ress](https://github.com/filipelinhares/ress)
* [CSS Remedy](https://github.com/mozdevs/cssremedy)
* [https://www.shoelace.style/](https://www.shoelace.style/)
* [https://github.com/EvgenyOrekhov/holiday.css](https://github.com/EvgenyOrekhov/holiday.css)
* https://github.com/ryanmorr/baseline.css
* https://github.com/twbs/rfs#demos
* https://html.com/attributes/
* https://www.tutorialrepublic.com/html-reference/html5-tags.php
* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
* http://wtfforms.com/
* https://css.gg/
* http://jkorpela.fi/www/testel.html
* Format for Demo https://www.bitovi.com/blog/use-flexbox-to-create-a-sticky-header-and-sidebar-with-flexible-content


# Project To Do's
## Notes
* Mirror Firefox's documentation for grouping and language https://developer.mozilla.org/en-US/docs/Web/HTML/Element see https://developer.mozilla.org/en-US/docs/MDN/About#Copyrights_and_licenses
* Get the Responsive Font Sizes mixin installed and use that (https://github.com/twbs/rfs).
* Look into: https://www.gridlover.net/try
* Look into: https://type-scale.com/
* The .h1 – .h6 font-size utilities can be used to override an element’s default size. https://basscss.com/
* Would it be fun or annoying if page.scss become pages.css so that way it's always (pagescss)
* We should add input[type="color"][list] support https://github.com/jensimmons/cssremedy/blob/master/process/UA_stylesheets/chrome.css
* List of Chrome's default stylings https://github.com/jensimmons/cssremedy/blob/master/process/UA_stylesheets/chrome.css
* Add all HTML Character Entities https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references - I would like them to all have their "Numeric" codes but those seem to be missing
* Should we mirror grouped structure of https://html.spec.whatwg.org/multipage/
* Checkout the grouped structure of https://www.htmlhelp.com/reference/html40/olist.html and stricts vs non strict toggle (https://www.htmlhelp.com/reference/html40/alist.html)
* Look into enterkeyhint https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode
* Add a style for an <a> tag that's been visited, using the current page URL?

## Potential Classed Extensions 
* Animations - Consists of animations that will work with the controls.
* Avatar - Styles for user avatars.
* Cards - Base for card controls.
* Grid - Experimental implementation of CSS Grid standard.
* Modal - Styles for a pop up modal dialog.
* Modifiers - Classes designed for modifying text and backgrounds.
* Pagination - Design for pagination and pagination navigation links.
* Placeholder - Styles for a control designed to be a placeholder such as "Coming Soon" panels and so on.
* Tabs - Contains styles for tab controls.
* Tags - Chip-like controls that are helpful for listing items.
* Tiles - Flexible layout used for tiling controls horizontally.
* Toast - A small overaly notification for websites.
* Tooltips - Add tooltips to any control for contextual info.
------------
* Buttons - Styles for the button with 3 different variations.
* Code - Style for code markup blocks.
* Default (Base) - The core of this framework.
* Font - All text styles for this framework for headers, articles, blockquotes, and paragraphs.
* Footer - Basic styles for setting up a page footer.
* Forms - Form styles for textboxes, textfields, selects, and layout.
* Frames - Flexible panel with header, body, and footer for layouts.
* Header - Styles for header elements including drop down menus.
* Layout - Rules for grids, item alignment, and layout borders.
* Links - Link styles with different effects.
* Lists - A simple stylesheet to simplify list UI.
* Media - Rules for styling images, videos, figures, avatars, and other media components.
* Tables - Clean designs for tables.
* Theme - Default colors of the framework.
* Util - Designed to solve many common headaches with CSS.

## Marketing
* Browser Support Idea (https://d.pr/i/b2URl2 from https://github.com/Spiderpig86/Cirrus)
Misc
* Theme builder https://hiq-theme-builder.netlify.app/theme/colors (REF)
------------
[](#less-coding-guidelines)LESS Coding Guidelines
=================================================

Medium uses a strict subset of [LESS](http://lesscss.org/) for style generation. This subset includes variables and mixins, but nothing else (no nesting, etc.).

Medium's naming conventions are adapted from the work being done in the SUIT CSS framework. Which is to say, it relies on _structured class names_ and _meaningful hyphens_ (i.e., not using hyphens merely to separate words). This is to help work around the current limits of applying CSS to the DOM (i.e., the lack of style encapsulation) and to better communicate the relationships between classes.

**Table of contents**

*   [JavaScript](#javascript)
*   [Utilities](#utilities)
    *   [u-utilityName](#u-utilityName)
*   [Components](#components)
    *   [componentName](#componentName)
    *   [componentName--modifierName](#componentName--modifierName)
    *   [componentName-descendantName](#componentName-descendantName)
    *   [componentName.is-stateOfComponent](#is-stateOfComponent)
*   [Variables](#variables)
    *   [colors](#colors)
    *   [z-index](#zindex)
    *   [font-weight](#fontweight)
    *   [line-height](#lineheight)
    *   [letter-spacing](#letterspacing)
*   [Polyfills](#polyfills)
*   [Formatting](#formatting)
    *   [Spacing](#spacing)
    *   [Quotes](#quotes)
*   [Performance](#performance)
    *   [Specificity](#specificity)

[](#javascript)JavaScript
-------------------------

syntax: `js-<targetName>`

JavaScript-specific classes reduce the risk that changing the structure or theme of components will inadvertently affect any required JavaScript behaviour and complex functionality. It is not neccesarry to use them in every case, just think of them as a tool in your utility belt. If you are creating a class, which you dont intend to use for styling, but instead only as a selector in JavaScript, you should probably be adding the `js-` prefix. In practice this looks like this:

    <a href\="/login" class\="btn btn-primary js-login"\></a\>

**Again, JavaScript-specific classes should not, under any circumstances, be styled.**

[](#utilities)Utilities
-----------------------

Medium's utility classes are low-level structural and positional traits. Utilities can be applied directly to any element; multiple utilities can be used together; and utilities can be used alongside component classes.

Utilities exist because certain CSS properties and patterns are used frequently. For example: floats, containing floats, vertical alignment, text truncation. Relying on utilities can help to reduce repetition and provide consistent implementations. They also act as a philosophical alternative to functional (i.e. non-polyfill) mixins.

<div class\="u-clearfix"\>
  <p class\="u-textTruncate"\>{$text}</p\>
  <img class\="u-pullLeft" src\="{$src}" alt\=""\>
  <img class\="u-pullLeft" src\="{$src}" alt\=""\>
  <img class\="u-pullLeft" src\="{$src}" alt\=""\>
</div\>

### [](#u-utilityname)u-utilityName

Syntax: `u-<utilityName>`

Utilities must use a camel case name, prefixed with a `u` namespace. What follows is an example of how various utilities can be used to create a simple structure within a component.

<div class\="u-clearfix"\>
  <a class\="u-pullLeft" href\="{$url}"\>
    <img class\="u-block" src\="{$src}" alt\=""\>
  </a\>
  <p class\="u-sizeFill u-textBreak"\>
    …
  </p\>
</div\>

[](#components)Components
-------------------------

Syntax: `<componentName>[--modifierName|-descendantName]`

Component driven development offers several benefits when reading and writing HTML and CSS:

*   It helps to distinguish between the classes for the root of the component, descendant elements, and modifications.
*   It keeps the specificity of selectors low.
*   It helps to decouple presentation semantics from document semantics.

You can think of components as custom elements that enclose specific semantics, styling, and behaviour.

### [](#componentname)ComponentName

The component's name must be written in camel case.

    .myComponent { /\* … \*/ }
    
    <article class\="myComponent"\>
      …
    </article\>

### [](#componentname--modifiername)componentName--modifierName

A component modifier is a class that modifies the presentation of the base component in some form. Modifier names must be written in camel case and be separated from the component name by two hyphens. The class should be included in the HTML _in addition_ to the base component class.

    /\* Core button \*/
    .btn { /\* … \*/ }
    /\* Default button style \*/
    .btn--default { /\* … \*/ }
    
    <button class\="btn btn--primary"\>…</button\>

### [](#componentname-descendantname)componentName-descendantName

A component descendant is a class that is attached to a descendant node of a component. It's responsible for applying presentation directly to the descendant on behalf of a particular component. Descendant names must be written in camel case.

    <article class\="tweet"\>
      <header class\="tweet-header"\>
        <img class\="tweet-avatar" src\="{$src}" alt\="{$alt}"\>
        …
      </header\>
      <div class\="tweet-body"\>
        …
      </div\>
    </article\>

### [](#componentnameis-stateofcomponent)componentName.is-stateOfComponent

Use `is-stateName` for state-based modifications of components. The state name must be Camel case. **Never style these classes directly; they should always be used as an adjoining class.**

JS can add/remove these classes. This means that the same state names can be used in multiple contexts, but every component must define its own styles for the state (as they are scoped to the component).

    .tweet { /\* … \*/ }
    .tweet.is-expanded { /\* … \*/ }

    <article class\="tweet is-expanded"\>
      …
    </article\>

[](#variables)Variables
-----------------------

Syntax: `<property>-<value>[--componentName]`

Variable names in our CSS are also strictly structured. This syntax provides strong associations between property, use, and component.

The following variable defintion is a color property, with the value grayLight, for use with the highlightMenu component.

    @color-grayLight--highlightMenu: rgb(51, 51, 50);

### [](#colors)Colors

When implementing feature styles, you should only be using color variables provided by colors.less.

When adding a color variable to colors.less, using RGB and RGBA color units are preferred over hex, named, HSL, or HSLA values.

**Right:**

    rgb(50, 50, 50);
    rgba(50, 50, 50, 0.2);

**Wrong:**

    #FFF;
    #FFFFFF;
    white;
    hsl(120, 100%, 50%);
    hsla(120, 100%, 50%, 1);

### [](#z-index-scale)z-index scale

Please use the z-index scale defined in z-index.less.

`@zIndex-1 - @zIndex-9` are provided. Nothing should be higher then `@zIndex-9`.

### [](#font-weight)Font Weight

With the additional support of web fonts `font-weight` plays a more important role than it once did. Different font weights will render typefaces specifically created for that weight, unlike the old days where `bold` could be just an algorithm to fatten a typeface. Obvious uses the numerical value of `font-weight` to enable the best representation of a typeface. The following table is a guide:

Raw font weights should be avoided. Instead, use the appropriate font mixin: `.font-sansI7, .font-sansN7, etc.`

The suffix defines the weight and style:

    N \= normal
    I \= italic
    4 \= normal font-weight
    7 \= bold font-weight

Refer to type.less for type size, letter-spacing, and line height. Raw sizes, spaces, and line heights should be avoided outside of type.less.

ex:

    @fontSize-micro
    @fontSize-smallest
    @fontSize-smaller
    @fontSize-small
    @fontSize-base
    @fontSize-large
    @fontSize-larger
    @fontSize-largest
    @fontSize-jumbo

See [Mozilla Developer Network — font-weight](https://developer.mozilla.org/en/CSS/font-weight) for further reading.

### [](#line-height)Line Height

Type.less also provides a line height scale. This should be used for blocks of text.

ex:

    @lineHeight-tightest
    @lineHeight-tighter
    @lineHeight-tight
    @lineHeight-baseSans
    @lineHeight-base
    @lineHeight-loose
    @lineHeight-looser

Alternatively, when using line height to vertically center a single line of text, be sure to set the line height to the height of the container - 1.

    .btn {
      height: 50px;
      line-height: 49px;
    }

### [](#letter-spacing)Letter spacing

Letter spacing should also be controlled with the following var scale.

    @letterSpacing-tightest
    @letterSpacing-tighter
    @letterSpacing-tight
    @letterSpacing-normal
    @letterSpacing-loose
    @letterSpacing-looser

[](#polyfills)Polyfills
-----------------------

mixin syntax: `m-<propertyName>`

At Medium we only use mixins to generate polyfills for browser prefixed properties.

An example of a border radius mixin:

    .m-borderRadius(@radius) {
      -webkit-border-radius: @radius;
         -moz-border-radius: @radius;
              border-radius: @radius;
    }

[](#formatting)Formatting
-------------------------

The following are some high level page formatting style rules.

### [](#spacing)Spacing

CSS rules should be comma seperated but live on new lines:

**Right:**

    .content,
    .content-edit {
      …
    }

**Wrong:**

    .content, .content-edit {
      …
    }

CSS blocks should be seperated by a single new line. not two. not 0.

**Right:**

    .content {
      …
    }
    .content-edit {
      …
    }

**Wrong:**

    .content {
      …
    }
    
    .content-edit {
      …
    }

### [](#quotes)Quotes

Quotes are optional in CSS and LESS. We use double quotes as it is visually clearer that the string is not a selector or a style property.

**Right:**

    background-image: url("/img/you.jpg");
    font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial;

**Wrong:**

    background-image: url(/img/you.jpg);
    font-family: Helvetica Neue Light, Helvetica Neue, Helvetica, Arial;

[](#performance)Performance
---------------------------

### [](#specificity)Specificity

Although in the name (cascading style sheets) cascading can introduce unnecessary performance overhead for applying styles. Take the following example:

    ul.user-list li span a:hover { color: red; }

Styles are resolved during the renderer's layout pass. The selectors are resolved right to left, exiting when it has been detected the selector does not match. Therefore, in this example every a tag has to be inspected to see if it resides inside a span and a list. As you can imagine this requires a lot of DOM walking and and for large documents can cause a significant increase in the layout time. For further reading checkout: [https://developers.google.com/speed/docs/best-practices/rendering#UseEfficientCSSSelectors](https://developers.google.com/speed/docs/best-practices/rendering#UseEfficientCSSSelectors)

If we know we want to give all `a` elements inside the `.user-list` red on hover we can simplify this style to:

    .user-list \> a:hover {
      color: red;
    }

If we want to only style specific `a` elements inside `.user-list` we can give them a specific class:

    .user-list \> .link-primary:hover {
      color: red;
    }
