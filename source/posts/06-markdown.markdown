---
title: Markdown
permalink: markdown
description: Getting started with the squido markdown format
date: '2021-03-05 01:55:00'
author: Mark Moffat
tags: 
  - usage
---

`squido` uses [CommonMark](http://spec.commonmark.org/) spec to process the markdown formatted posts.

A quick syntax summary to get your started:

Type                                                                            | Renders                        
------------------------------------------------------------------------------- | -----------------------------------
*Italic* or \_Italic_                                                          | *Italic*
\**Bold** or \__Bold__                                                          | **Bold**
\# Heading 1                                                                    | <h1>Heading 1</h1>
\# Heading 2                                                                    | <h2>Heading 2</h2>
\# Heading 3                                                                    | <h3>Heading 3</h3>
\[Link](https://a.com)                                                          | [Link](https://a.com)
\[Image](https://url/a.png)                                                     | ![Link](https://commonmark.org/help/images/favicon.png)
\> Blockquote                                                                   | <blockquote>Blockquote</blockquote>
\* List </br> \* List <br> * List  <br> or <br> - List </br> - List <br> - List | <ul><li>List</li><li>List</li><li>List</li></ul>
<code>1. List </br>2. List<br>3. List </code><br>or<br> 1) List </br> 2) List <br> 3) List | <ol><li>List</li><li>List</li><li>List</li></ol>
Horizontal rule: <br> \---  <br> or <br> \***                                   | Horizontal rule: <br> <hr>
\`Inline code` with backticks                                                   | `Inline code` with backticks
\``` javascript <br> const test = () => {<br>&nbsp;&nbsp; console.log('test');<br> }; <br>``` | <pre> const test = () => {<br>&nbsp;&nbsp; console.log('test');<br> }; <br></pre>

{.table .table-hover .table-bordered}


### Playground 

You can play around with the Markdown Playground [here](https://spec.commonmark.org/dingus/).

### Code syntax highlighting

`squido` uses [Highlight.js](https://highlightjs.org/) for code highlighting. This means you can use the code block example above with code wrapped in \``` backticks. You can specify the language by adding the [language](https://highlightjs.org/static/demo/) for your code block. 

For example, adding this:

\``` javascript <br> function test(p1, p2) {<br>&nbsp;&nbsp; console.log('test');<br> }; <br>```

Renders this:

``` javascript
function test(p1, p2) {
  console.log('test');
};
```

### Markdown helpers

#### Attributes

You can add any HTML attributes including ID's and classes by adding `{attribute}` to your Markdown syntax. 

Adding a class to a header (`style-me` is the class):

`# header {.style-me}`

Adding a `data-toggle` attribute to a paragraph:

`paragraph {data-toggle=modal}`

You can also use this on tables with multiple classes. Eg (**note** the empty line under the table):

``` no-highlight
My table       | Header                        
-------------- | ----------
Table          | Contents

{.table .table-hover .table-bordered}
```

Renders this:

My table       | Header                        
-------------- | ----------
Table          | Contents

{.table .table-hover .table-bordered}


#### Heading anchors

All headings are automatically rendered as # anchors to hyperlink (skip) to sections within a page / post. This means you add the `/#heading-name` to the URL to automatically jump to that heading. 

For example: 
[https://docs.squido.org/markdown/#playground](https://docs.squido.org/markdown/#playground)