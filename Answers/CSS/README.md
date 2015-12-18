# CSS Questions

## What is the difference between classes and ID's in CSS? 😕

## What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why? 😕

Reset: It sets default values for basic elements and reduces browser
inconsistencies in things like default line heights, margins and font
sizes of headings, etc.

Normalize: TBD

## Describe Floats and how they work. 😎

 Float is a CSS positioning property. Elements are floated horizontally, this
 means that an element can only be floated left or right, not up or down.

A floated element will move as far to the left or right as it can. Usually this
means all the way to the left or right of the containing element. The elements
after the floating element will flow around it. The elements before the
floating element will not be affected.

*Note: Elements after the floating element will flow around it. To avoid this, use the clear property. The clear property specifies which sides of an element other floating elements are not allowed.*

## Describe z-index and how stacking context is formed. 😕

## Describe BFC(Block Formatting Context) and how it works. 😕

## What are the various clearing techniques and which is appropriate for what context? 😎

1 - **Floating the container**

If you float an element containing floats, it will encompass its content. The
side-effect of this is that we add another floated element to the page, while
we most of the times want it to behave as a regular block element. That is
solved by applying a width of 100% to the container as well, so it forces
a line-break before the content after it.

**Downsides**

*   Setting a width to 100% might collide with desired padding.
*   IE 6 seems to add an extra bottom margin in some cases.

2 -  **Adding `overflow: hidden;` To the container**

If you add `overflow: hidden;` to the containing element, it will automatically
adjust its height and take the floated children into account.

3 - **Generating Content Through CSS (recommended)**

Another alternative is to use the CSS pseudo-class `:after` to generate content
after the containing element, using it to clear floats and then hiding itself.
Personally, I don’t like this approach since it generates content to the page
that has nothing to do there in the first place.

```css
.container-with-generated-content:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
```

**Downsides**

Not IE 6 nor IE 7 supports the `:after` pseudo-class, so you need to apply a
hasLayout fix for both of them. Note that IE 7 also supports a hasLayout fix.

## Explain CSS sprites, and how you would implement them on a page or site. 😎

CSS Sprites is a method of combining multiple images used throughout your
website into one large image (or "sprite") to reduce the total number
network requests for images. Using this sprite image with the proper
`background-position` CSS attributes and X, Y coordinates, it is
then possible to display a particular image.

[CSS Tricks](http://css-tricks.com/css-sprites/)

## What are your favorite image replacement techniques and which do you use when? 😎

[CSS Tricks](https://css-tricks.com/the-image-replacement-museum/) technique museum.

Bonus points for knowing [potential SEO risk](https://support.google.com/webmasters/answer/66353).

**2014: H5BP Image Replacement 2**

This doesn't really replace a single element with an image, it just does a
good job at hiding an element from view while remaining accessible to screen
readers. So you could use whatever you wanted to display the image, then put
text next to it.

```html
<h1 class="visuallyhidden">
  H5BP
</h1>
```

```css
h1.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
```

Hide only visually, but have it available for screen readers:

[Source](http://snook.ca/archives/html_and_css/hiding-content-for-accessibility)

**2012: Scott Kellum Method**

Positions text outside the container and hides with overflow.

```html
<h1>
  Scott Kellum Method
</h1>
```

```css
h3.skm {
  width: 300px;
  height: 75px;
  background: url(path/to/image);
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
}
```

[Source](http://www.zeldman.com/2012/03/01/replacing-the-9999px-hack-new-image-replacement/)

## How would you approach fixing browser-specific styling issues? 😎

1 - Browser specific CSS hacks

```css
_color: blue /* ie6 */
*color: blue /* ie6, ie7 */
color: blue\9 /* ie6, ie7, ie8 */
```

 2 - Conditional stylesheets

```html
<link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
<!--[if IE 7]><link rel="stylesheet" type="text/css" media="screen" href="css/ie7.css"  />< ![endif]-->
<!--[if IE 6]><link rel="stylesheet" type="text/css" media="screen" href="css/ie6.css"  />< ![endif]-->
```

3 - Conditional comments to set classes on the html element

```html
<!--[if lt IE 7]     <html class="ie6"> <![endif]-->
<!--[if IE 7]>         <html class="ie7"> <![endif]-->
<!--[if IE 8]>         <html class="ie8"> <![endif]-->
<!--[if gt IE 8]><!--> <html>         <!--<![endif]-->
```

```css
div.foo { color: inherit;}
.ie6 div.foo { color: #ff8000; }
```

## How do you serve your pages for feature-constrained browsers? 😎

### What techniques/processes do you use? 😎

**Graceful Degredation** is an older, fault tolerant approach of disabling
features based entirely on which browser is detected.

**Progressive Enhancement** is able to support evergreen browsers by
detecting support for specific features for HTML, CSS & JavaScript.
Modernizr can be used to detect many HTML5 API's and CSS3 rules.
If backwards compatibility is necessary, features may be supported
using polyfills such as those provided by Autoprefixer or Babel.

## What are the different ways to visually hide content (and make it available only for screen readers)? 😎

1.  `position: absolute;  margin-left: -10000px;`
2.  `display: none;`
3.  `opacity: 0.0;`
4.  `visibility: hidden;` # without changing the layout

## Have you ever used a grid system, and if so, what do you prefer? 😕

Quickly [compare](http://responsive.vermilion.com/compare.php) Bootstrap and
Foundation or reference comparison
[criteria and explanations](https://github.com/corysimmons/lost/wiki/Comparison-Explanation)
from Lost Grid.

## Have you used or implemented media queries or mobile specific layouts/CSS? 😕

[Smashing Magazine](http://mobile.smashingmagazine.com/2010/07/19/how-to-use-css3-media-queries-to-create-a-mobile-version-of-your-website/)

## Are you familiar with styling SVG? 😕

## How do you optimize your webpages for print? 😕

In the case of a print stylesheet when the page is printed this functionality
is enabled in CSS2 by media types. Media Types let you specify a type of media
to target, so you could target print.

Steps:

1.  Create a stylesheet for print

2.  Avoid unnecessary HTML tables

3.  Know which portions of the page don't have any print value and use
`.no-print { display: none; }`

4.  Use page breaks

5.  Size size your page for print

6.  Test!

[Smashing Magazine](http://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/)

## What are some of the "gotchas" for writing efficient CSS? 😕

*   Use a CSS reset
*   Clear things up
*   Box Model
*   IE is bad but have to deal with it with tricks

## What are the advantages/disadvantages of using CSS preprocessors? 😕

### Describe what you like and dislike about the CSS preprocessors you have used. 😕

## How would you implement a web design comp that uses non-standard fonts? 😕

Webfonts (font services like: Google Webfonts, Typekit etc.)

## Explain how a browser determines what elements match a CSS selector. 😕

Browsers match from the right; it gives an obvious starting point and lets you
get rid of most of the candidate selectors very quickly

## Describe pseudo-elements and discuss what they are used for. 😕

## Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models. 😕

## What does ```* { box-sizing: border-box; }``` do? What are its advantages? 😕

## List as many values for the display property that you can remember. 😕

## What's the difference between inline and inline-block? 😕

## What's the difference between a relative, fixed, absolute and statically positioned element? 😕

## The 'C' in CSS stands for Cascading.  How is priority determined in assigning styles (a few examples)?  How can you use this system to your advantage? 😕

## What existing CSS frameworks have you used locally, or in production? How would you change/improve them? 😕

## Have you played around with the new CSS Flexbox or Grid specs? 😕

## How is responsive design different from adaptive design? 😕

## Have you ever worked with retina graphics? If so, when and what techniques did you use? 😕

## Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why? 😕
