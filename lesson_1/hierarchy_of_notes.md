# A Hierarchy of Nodes

## Problem 1

  * Question: True or False: there is a direct one-to-one mapping between the tags that appear in an HTML file and the nodes in the DOM.
  * Answer: False. The DOM can include additional nodes that don't exist in the HTML, such as text nodes which represent the text in between `<p>` tags and 'empty' nodes which are 'text' nodes representing the whitespace between element nodes, or nodes which have been inserted by the browser to render invalid markup (such as missing `<head>` or `<body>` tags).

## Problem 2

  * Question: True or False: Text nodes sometimes contain nothing but whitespace.
  * Answer: True. Text nodes can represent the whitespace between element nodes.

## Problem 3 & 4

  * Question 3: Given the HTML shown below, draw the DOM that the browser will construct when it loads the HTML. Determine which nodes are:

    * elements,
    * text nodes with nothing but whitespace
    * text nodes containing text,
    * or comments.

  * Question 4: Update the drawing from the previous question to show the values of each text node.

  * Answer:

    * `<html>` (element)
    * `\n  ` (text: whitespace)
      * `<head>` (element)
      * `\n    ` (text: whitespace)
        * `<title>` (element)
          * `Newsletter Signup` (text)
        * `\n  ` (text: whitespace)
      * `\n  ` (text: whitespace)
      * `<body>` (element)
      * `\n    ` (text: whitespace)
        * `<!-- A short comment -->` (comment)
        * `\n  ` (text: whitespace)
        * `<h1>` (element)
          * `Newsletter Signup` (text)
        * `\n  ` (text: whitespace)
        * `<p>` (element)
          * `\n      ` (text: whitespace)
          * `To receive our weekly emails, enter your email address below.` (text)
          * `\n      ` (text: whitespace)
          * `<a>` (element)
            * `Get more info` (text)
          * `\n    ` (text: whitespace)
        * `\n    ` (text: whitespace)
        * `<div>` (element)
          * `\n      ` (text: whitespace)
          * `<form>` (element)
            * `\n        ` (text: whitespace)
            * `<label>` (element)
              * `\n        ` (text: whitespace)
              * `Enter your email:` (text)
              * `\n        ` (text: whitespace)
              * `input` (element)
              * `\n      ` (text: whitespace)
            * `\n      ` (text: whitespace)
            * `<p>` (element)
              * `\n        ` (text: whitespace)
              * `<button>` (element)
                * `Cancel` (text)
              * `\n        ` (text: whitespace)
              * `<button>` (element)
                * `Subscribe` (text)
              * `\n        ` (text: whitespace)
            * `\n      ` (text: whitespace)
          * `\n      ` (text: whitespace)
        * `\n    ` (text: whitespace)
      * `\n` (text: whitespace)
