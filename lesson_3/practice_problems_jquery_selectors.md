# Practice Problems: Using jQuery Selectors

To work these practice problems, use this HTML file:

```
<!doctype html>
<html lang="en-US">
  <head>
    <title>jQuery Selectors</title>
    <meta charset="utf-8" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <style>
      .highlight { background: #f0f0a0; }
    </style>
  </head>
  <body>
    <header>
      <h1 id="site_title">Site Title</h1>
      <h2>Company Tagline</h2>
      <ul>
        <li><a href="http://google.com">Home</a></li>
        <li><a href="#">Store</a></li>
        <li class="block"><a href="http://github.com">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </header>

    <article class="blog_article_block">
      <h1>Heading 1</h1>
      <p>Cras ornare elementum sodales. Proin id pretium felis, non viverra magna. Suspendisse quis feugiat metus. Praesent luctus lorem sed est mollis rhoncus. Sed non odio a lorem mattis porta. Phasellus orci velit, pellentesque nec tempus vel, mattis sed magna. Nam gravida lorem vel nibh lacinia aliquet. Sed est sem, vehicula ut facilisis sit amet, consequat non lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec at eleifend dui. Suspendisse et est a dolor finibus luctus. Quisque et lacus eros. Sed venenatis id orci consectetur lobortis. Integer fringilla risus sagittis luctus interdum. Suspendisse potenti. Vivamus scelerisque dignissim eros, eget elementum urna molestie eu.</p>
      <ul>
        <li>Vestibulum tempor tortor et dapibus accumsan.</li>
        <li>Nam ut risus nec odio gravida vestibulum.</li>
        <li>
          Interdum et malesuada fames
          <ul>
            <li>ac ante</li>
            <li>ipsum primis</li>
            <li>in faucibus</li>
          </ul>
        </li>
        <li>Proin cursus ex eu faucibus malesuada.</li>
      </ul>
    </article>
    <article>
      <h1 class="h1_block_square">Heading 1</h1>
      <p>Vestibulum ac elit aliquam, pretium ante et, tristique felis. Praesent bibendum, enim at faucibus ultrices, sapien metus pharetra ex, vitae vestibulum libero mauris quis lorem. Mauris ultricies enim malesuada aliquet porta. Nunc fringilla scelerisque ex et mattis. Integer sollicitudin dignissim mattis.</p>
    </article>
    <article>
      <h1>Heading 1</h1>
      <table>
        <tbody>
          <tr>
            <td>Cras ornare</td>
            <td class="protected">elementum sodales</td>
            <td>Proin id pretium</td>
          </tr>
          <tr>
            <td>non viverra magna</td>
            <td>Suspendisse quis</td>
            <td class="protected">feugiat metus</td>
          </tr>
          <tr>
            <td>Praesent luctus</td>
            <td>lorem sed</td>
            <td>est mollis</td>
          </tr>
        </tbody>
      </table>
    </article>
  </body>
</html>
```

## Problem 1

Use an element selector to find all `h1` elements.

### Answer

```
$('h1');
```

## Problem 2

Use an ID selector to find the first `h1` element.

### Answer

```
$('#site_title');
```

## Problem 3

Use a descendant selector to find all the list items in the `article` element.

### Answer

```
$('article li');
```

## Problem 4

Find the third list item from the `article` element.

### Answer

```
$('article li > ul').parent('li');
```

or LS solution:

```
$('article li').eq(2);
```

## Problem 5

Find the table element, then find all the odd-numbered table rows in that element.

### Answer

```
$('table tr').filter(':odd');
```

or LS solutions:

```
$('table').find('tr').filter(':odd');
// or
$('table').find('tr:odd');
```

## Problem 6

Find the list item that contains the text ac ante, then locate the parent `li` element.

### Answer

```
$('li').filter(function(index) {
  return $(this).text() === 'ac ante';
}).parents('li');
```

or LS solutions:

```
$('li').filter(":contains('ac ante')").parents('li');
// or
$("li:contains('ac ante')").parents('li');
```

## Problem 7

Find the list item that contains the text ac ante, then find and return the next element.

### Answer

```
$('li').filter(function(index) {
  return $(this).text() === 'ac ante';
}).next();
```

or LS solution:

```
$("article li li:contains('ac ante')").next();

```

## Problem 8

Find all the table cells in the table, then find the last cell from the collection.

### Answer

```
$('table td').last();
```

## Problem 9

Find all the table cells that do not have a class of `"protected"`.

### Answer

```
$('td').not('.protected');
```

## Problem 10

Find all the anchor elements that have an `href` value that begins with `#`.

### Answer

```
$('a').filter(function() {
  return $(this).attr('href')[0] === '#';
});
```

or LS solution (using the [Starts with Selector](https://api.jquery.com/attribute-starts-with-selector/)):

```
$('a[href^=#]');
```

## Problem 11

Find all elements that have a class name that contains `"block"`.

### Answer

```
$('[class*=block]');
```
