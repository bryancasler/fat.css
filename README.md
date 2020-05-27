# page.scss
Mostly classless and a few classed styles for page theming with cross-browser consistance.

## Structural Tags
<a> Defines a hyperlink.
<article> Defines an article.
<aside> Defines some content loosely related to the page content.
<body> Defines the document's body.
<br> Produces a single line break.
<details> Represents a widget from which the user can obtain additional information or controls on-demand.
<div> Specifies a division or a section in a document.
<h1> Defines H1 heading.
<h2> Defines H2 heading.
<h3> Defines H3 heading.
<h4> Defines H4 heading.
<h5> Defines H5 heading.
<h6> Defines H6 heading.
<header> Represents the header of a document or a section.
<hgroup> Defines a group of headings.
<hr> Produce a horizontal line.
<html> Defines the root of an HTML document.
<footer> Represents the footer of a document or a section.
<nav> Defines a section of navigation links.
<p> Defines a paragraph.
<section> Defines a section of a document, such as header, footer etc.
<span> Defines an inline styleless section in a document.
<summary> Defines a summary for the <details> element.

## Form Tags
<button> Creates a clickable button.
<datalist> Represents a set of pre-defined options for an <input> element.
<fieldset> Specifies a set of related form fields.
<form> Defines an HTML form for user input.
<input> Defines an input control.
* <input type="button"> A push button with no default behavior displaying the value of the value attribute, empty by default.
* <input type="checkbox"> A check box allowing single values to be selected/deselected.
* <input type="color"> A control for specifying a color; opening a color picker when active in supporting browsers.
* <input type="date"> A control for entering a date (year, month, and day, with no time). Opens a date picker or numeric wheels for year, month, day when active in supporting browsers.
* <input type="datetime"> Obsolete A control for entering a date and time (hour, minute, second, and fraction of a second) as well as a timezone.
* <input type="datetime-local"> A control for entering a date and time, with no time zone. Opens a date picker or numeric wheels for date- and time-components when active in supporting browsers.
* <input type="email"> A field for editing an email address. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.
* <input type="file"> A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select.
* <input type="hidden"> A control that is not displayed but whose value is submitted to the server. There is an example in the next column, but it's hidden!
* <input type="image"> A graphical submit button. Displays an image defined by the src attribute. The alt attribute displays if the image src is missing.
* <input type="month"> A control for entering a month and year, with no time zone.
* <input type="number"> A control for entering a number. Displays a spinner and adds default validation when supported. Displays a numeric keypad in some devices with dynamic keypads.
* <input type="password"> A single-line text field whose value is obscured. Will alert user if site is not secure.
* <input type="radio"> A radio button, allowing a single value to be selected out of multiple choices with the same name value.
* <input type="range"> A control for entering a number whose exact value is not important. Displays as a range widget defaulting to the middle value. Used in conjunction min and max to define the range of acceptable values.
* <input type="reset"> A button that resets the contents of the form to default values. Not recommended.
* <input type="search"> A single-line text field for entering search strings. Line-breaks are automatically removed from the input value. May include a delete icon in supporting browsers that can be used to clear the field. Displays a search icon instead of enter key on some devices with dynamic keypads.
* <input type="submit"> A button that submits the form.
* <input type="tel"> A control for entering a telephone number. Displays a telephone keypad in some devices with dynamic keypads.
* <input type="text"> The default value. A single-line text field. Line-breaks are automatically removed from the input value.
* <input type="time"> A control for entering a time value with no time zone.
* <input type="url"> A field for entering a URL. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.
* <input type="week"> A control for entering a date consisting of a week-year number and a week number with no time zone.
<keygen> Represents a control for generating a public-private key pair.
<label> Defines a label for an <input> control.
<legend> Defines a caption for a <fieldset> element.
<meter> Represents a scalar measurement within a known range.
<optgroup> Defines a group of related options in a selection list.
<option> Defines an option in a selection list.
<select> Defines a selection list within a form.
<textarea> Defines a multi-line text input control (text area).

## Formatting Tags
<abbr> Defines an abbreviated form of a longer word or phrase.
<acronym> Defines an acronym.
<address> Specifies the author's contact information.
<b> Displays text in a bold style.
<bdi> Represents text that is isolated from its surrounding for the purposes of bidirectional text formatting.
<bdo> Overrides the current text direction.
<big> displays text in a large size.
<blockquote> Defines a long quotation.
<center> Obsolete Align contents in the center of the enclosing block.
<cite> Indicates a citation or reference to another source.
<code> Specifies text as computer code.
<del> Specifies a block of deleted text.
<dfn> Specifies a definition.
<em> Specifies emphasized text.
<font> Obsolete Defines font, color, and size for text.
<i> Displays text in an italic style.
<ins> Defines a block of text that has been inserted into a document.
<kbd> Specifies text as keyboard input.
<mark> Represents text highlighted for reference purposes.
<output> Represents the result of a calculation.
<pre> Defines a block of preformatted text.
<progress> Represents the completion progress of a task.
<q> Defines a short inline quotation.
<rp> Provides fall-back parenthesis for browsers that that don't support ruby annotations.
<rt> Defines the pronunciation of character presented in a ruby annotations.
<ruby> Represents a ruby annotation.
<s> Obsolete Displays text in strikethrough style.
<samp> Specifies text as sample output from a computer program.
<small> Displays text in a smaller size.
<strike> Obsolete Displays text in strikethrough style.
<strong> Indicate strongly emphasized text.
<sub> Defines subscripted text.
<sup> Defines superscripted text.
<tt> Displays text in a teletype style.
<u> Obsolete Displays text with an underline.
<var> Defines a variable.
<wbr> Represents a line break opportunity.

## List Tags
<dd> Specifies a definition for a term in a definition list.
<dir> Obsolete Defines a directory list.
<dl> Defines a definition list.
<dt> Defines a term (an item) in a definition list.
<li> Defines a list item.
<ol> Defines an ordered list.
<menu> Represents a list of commands.
<ul> Defines an unordered list.

## Table Tags
<caption> Defines the title of a table.
<col> Defines attribute values for one or more columns in a table.
<colgroup> Specifies attributes for multiple columns in a table.
<table> Defines a data table.
<tbody> Groups a set of rows defining the main body of the table data.
<td> Defines a cell in a table.
<tfoot> Groups a set of rows summarizing the columns of the table.
<thead> Groups a set of rows that describes the column labels of a table.
<th> Defines a header cell in a table.
<tr> Defines a row of cells in a table.

## Embedded Tags
<applet> Obsolete Embeds a Java applet (mini Java applications) on the page. Use the <object> element instead.
<area> Defines a specific area within an image map.
<audio> Embeds a sound, or an audio stream in an HTML document.
<canvas> Defines a region in the document, which can be used to draw graphics on the fly via scripting (usually JavaScript).
<embed> Embeds external application, typically multimedia content like audio or video into an HTML document.
<figcaption> Defines a caption or legend for a figure.
<figure> Represents a figure illustrated as part of the document.
<frame> Defines a single frame within a frameset.
<frameset> Defines a collection of frames or other frameset.
<iframe> Displays a URL in an inline frame.
<img> Displays an inline image.
<map> Defines a client-side image-map.
<noframes> Defines an alternate content that displays in browsers that do not support frames.
<object> Defines an embedded object.
<param> Defines a parameter for an object or applet element.
<source> Defines alternative media resources for the media elements like <audio> or <video>.
<time> Represents a time and/or date.
<video> Embeds video content in an HTML document.

# To Do's 
* Get the Responsive Font Sizes mixin installed and use that (https://github.com/twbs/rfs).
* Look into: https://www.gridlover.net/try
* Look into: https://type-scale.com/
* The .h1 – .h6 font-size utilities can be used to override an element’s default size. https://basscss.com/
* Would it be fun or annoying if page.scss become pages.css so that way it's always (pagescss)
* We should add input[type="color"][list] support https://github.com/jensimmons/cssremedy/blob/master/process/UA_stylesheets/chrome.css
* List of Chrome's default stylings https://github.com/jensimmons/cssremedy/blob/master/process/UA_stylesheets/chrome.css

# Inspirartion and References
* Normalize.css
* Santizie.css
* Shoelace.style
* Holiday.css
* https://github.com/ryanmorr/baseline.css
* https://github.com/twbs/rfs#demos
* https://html.com/attributes/
* https://www.tutorialrepublic.com/html-reference/html5-tags.php
* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
* http://wtfforms.com/
* https://css.gg/

# Potential Classed Extensions (not in here)
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
* Tooltips - Add tooltips to any control for contextual info..

# Marketing
* Browser Support Idea (https://d.pr/i/b2URl2 from https://github.com/Spiderpig86/Cirrus)
Misc
* Theme builder https://hiq-theme-builder.netlify.app/theme/colors (REF)

# MISC
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
