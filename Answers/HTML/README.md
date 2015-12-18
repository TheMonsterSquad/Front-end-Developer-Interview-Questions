# HTML Questions

## What's a `doctype` do? 😎

The DOCTYPE describes the HTML that will be used in your page. Browsers also
use the DOCTYPE to determine how to render a page. Not including a DOCTYPE or
including an incorrect DOCTYPE can trigger quirks mode.

## What's the difference between standards mode and quirks mode? 😎

There are now three modes used by the layout engines in web browsers:
quirks mode, almost standards mode, and full standards mode.

In **quirks mode**, layout emulates nonstandard behavior in Navigator 4
and Internet Explorer 5 for Windows that is required not to break existing
content on the Web.

In **full standards mode**, the behavior is (hopefully) the behavior described
by the HTML and CSS specifications.

In **almost standards mode**, there are only a very small number of
quirks implemented.

## What's the difference between HTML and XHTML? 😕

## Are there any problems with serving pages as `application/xhtml+xml`? 😎

Browsers will display xml parse errors if your page contains invalid code.

Serving your pages as `application/xhtml+xml` will cause Internet Explorer 8
to show a download dialog box for an unknown format instead of displaying your
page, as the first version of Internet Explorer with support for XHTML
is Internet Explorer 9.

[MDN](https://developer.mozilla.org/en-US/docs/Quirks_Mode_and_Standards_Mode#XHTML)

## How do you serve a page with content in multiple languages? 😎

To support multi language, include the tag `<meta charset="utf-8">` inside
the document `<head>` tag.

[W3C](http://www.w3.org/International/O-charset)
/ [Stack Overflow](https://stackoverflow.com/questions/4696499/meta-charset-utf-8-vs-meta-http-equiv-content-type)

To indicate what language is used inside a tag, use the `lang` attribute.
Supported on all elements but:

*   `<applet>`
*   `<base>`
*   `<basefont>`
*   `<br>`
*   `<frame>`
*   `<frameset>`
*   `<iframe>`
*   `<param>`
*   `<script>`

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)

## What kind of things must you be wary of when design or developing for multilingual sites? 😎

1.  Character encoding
2.  Language direction
3.  Using the right language code
4.  Font sizes

## What are `data-` attributes good for? 😎

The specification for custom data attributes states that any attribute that starts with `data-` will be treated as a storage area for private data (private in the sense that the end user can’t see it – it doesn’t affect layout or presentation).

This allows you to write valid HTML markup (passing an HTML 5 validator) while, simultaneously, embedding data within your page.

This data can be easily accessed by JavaScript using `dataset`.

[MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes)

## Consider HTML5 as an open web platform. What are the building blocks of HTML5? 😎

The main building blocks are:

**HTML** is a language to define the mark-up of a document
(titles, headers, body, footer, tables, input forms etc.),

**CSS** is a language to define style (formatting, colors, shades etc).

**Javascript** is a programming/scripting language.

**SVG** is a language for creating 2D scalable vector graphics and images.

[Source](http://yucianga.info/?p=655)

## Describe the difference between cookies, sessionStorage and localStorage. 😎

They are all storage on the client side.

Browsers that implement the “Web Storage” draft specification define two
properties on the Window object: `localStorage` and `sessionStorage`.

Both properties refer to a Storage object—a persistent associative array that
maps string keys to string values. Storage objects work much like regular
JavaScript objects: simply set a property of the object to a string, and the
browser will store that string for you. The difference between `localStorage`
and `sessionStorage` has to do with lifetime and scope: how long the data is
saved for and who the data is accessible to.

**Session Storage** is non persistent and scoped only to the current window.

**Local Storage** is persistent and scoped to the domain.

**Cookies** stores name/value pairs per domain with an expire time.

<!-- TODO: add IndexedDB API -->

## Describe the difference between `<script>`, `<script async>` and `<script defer>`. 😕

## Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before 😕 `</body>`? Do you know any exceptions?

## What is progressive rendering? 😕

## Have you used different HTML templating languages before? 😕
