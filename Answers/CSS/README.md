# CSS Questions

* :confused: What is the difference between classes and ID's in CSS?

* :confused: What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?

> Reset: It sets default values for basic elements and reduces browser inconsistencies in things like default line heights, margins and font sizes of headings, etc.

> Normalize: TBD

* :sunglasses: Describe Floats and how they work.

>  Float is a CSS positioning property. Elements are floated horizontally, this means that an element can only be floated left or right, not up or down.

> A floated element will move as far to the left or right as it can. Usually this means all the way to the left or right of the containing element. The elements after the floating element will flow around it. The elements before the floating element will not be affected.

> *Note: Elements after the floating element will flow around it. To avoid this, use the clear property. The clear property specifies which sides of an element other floating elements are not allowed.*

* :confused: Describe z-index and how stacking context is formed.

* :confused: Describe BFC(Block Formatting Context) and how it works.

* :sunglasses: What are the various clearing techniques and which is appropriate for what context?

> add a empty element `clear: both/left/right`: semantically too verbose
`overflow: hidden`: good one, but something, overflow is been used.
clearfix use :after psudo-class: require CSS3 support


> 1 - **Floating the container**

> If you float an element containing floats, it will encompass its content. The side-effect of this is that we add another floated element to the page, while we most of the times want it to behave as a regular block element. That is solved by applying a width of 100% to the container as well, so it forces a line-break before the content after it.

> **Downsides**
* Setting a width to 100% might collide with desired padding.
* IE 6 seems to add an extra bottom margin in some cases.


> 2 -  **Adding `overflow: hidden;` To the container**

> If you add `overflow: hidden;` to the containing element, it will automatically adjust its height and take the floated children into account.

> 3 - **Generating Content Through CSS (recommended)**

> Another alternative is to use the CSS pseudo-class `:after` to generate content after the containing element, using it to clear floats and then hiding itself. Personally, I don’t like this approach since it generates content to the page that has nothing to do there in the first place.
```
.container-with-generated-content:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
```

> **Downsides**

> Not IE 6 nor IE 7 supports the `:after` pseudo-class, so you need to apply a hasLayout fix for both of them. Note that IE 7 also supports a hasLayout fix.

* :sunglasses: Explain CSS sprites, and how you would implement them on a page or site.

> Concatenating small images into single large image to reduce request number. Using css background to show the right portion.

* :sunglasses: What are your favourite image replacement techniques and which do you use when?

> use `text-index: 100%;`

> [Source](http://css-tricks.com/examples/ImageReplacement/#leahy)

* :sunglasses: How would you approach fixing browser-specific styling issues?

> IE specific CSS hacks
```
_color: blue /* ie6 */
*color: blue /* ie6, ie7 */
color: blue\9 /* ie6, ie7, ie8 */
```
Conditional Stylesheets
```
<link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
<!--[if IE 7]><link rel="stylesheet" type="text/css" media="screen" href="css/ie7.css"  />< ![endif]-->
<!--[if IE 6]><link rel="stylesheet" type="text/css" media="screen" href="css/ie6.css"  />< ![endif]-->
```
better solution than Conditional Stylesheets
```
<!--[if lt IE 7]>      <html class="ie6"> <![endif]-->
<!--[if IE 7]>         <html class="ie7"> <![endif]-->
<!--[if IE 8]>         <html class="ie8"> <![endif]-->
<!--[if gt IE 8]><!--> <html>         <!--<![endif]-->
div.foo { color: inherit;}
.ie6 div.foo { color: #ff8000; }
```

* :confused: How do you serve your pages for feature-constrained browsers?
  * :confused: What techniques/processes do you use?


* :sunglasses: What are the different ways to visually hide content (and make it available only for screen readers)?

>
1. `position: absolute; margin-left: -10000;`
1. `display: none;`
1. `opacity: 0.5;`
1. `visibility: hidden;` # without changing the layout

* :confused: Have you ever used a grid system, and if so, what do you prefer?

* :confused: Have you used or implemented media queries or mobile specific layouts/CSS?

* :sunglasses: Are you familiar with styling SVG?

> essentially same thing, fill for background-color

* :confused: How do you optimize your webpages for print?

* :confused: What are some of the "gotchas" for writing efficient CSS?

* :confused: What are the advantages/disadvantages of using CSS preprocessors?
  * :confused: Describe what you like and dislike about the CSS preprocessors you have used.


* :confused: How would you implement a web design comp that uses non-standard fonts?

> Webfonts (font services like: Google Webfonts, Typekit etc.)

* :confused: Explain how a browser determines what elements match a CSS selector.

* :confused: Describe pseudo-elements and discuss what they are used for.

* :confused: Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.

* :confused: What does ```* { box-sizing: border-box; }``` do? What are its advantages?

* :confused: List as many values for the display property that you can remember.

* :confused: What's the difference between inline and inline-block?

* :confused: What's the difference between a relative, fixed, absolute and statically positioned element?

* :confused: The 'C' in CSS stands for Cascading.  How is priority determined in assigning styles (a few examples)?  How can you use this system to your advantage?

* :confused: What existing CSS frameworks have you used locally, or in production? How would you change/improve them?

* :confused: Have you played around with the new CSS Flexbox or Grid specs?

* :confused: How is responsive design different from adaptive design?

* :confused: Have you ever worked with retina graphics? If so, when and what techniques did you use?

* :confused: Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why?
