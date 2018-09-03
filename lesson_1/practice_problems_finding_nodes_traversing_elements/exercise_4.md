# Practice Problems: Finding Nodes and Traversing Elements

## Exercise 4

This problem uses the Polar Bear Wikipedia page:
  * [Original Link](https://en.wikipedia.org/wiki/Polar_bear)
  * [Saved Webpage](https://d3905n0khyu9wc.cloudfront.net/the_dom/polar_bear_wiki.html).

Write some JavaScript code to retrieve the text of every thumbnail caption on the page.

### Answer

```
var thumbs = document.querySelectorAll('.thumbcaption');
Array.prototype.slice.call(thumbs).map(thumb => thumb.textContent);
```
