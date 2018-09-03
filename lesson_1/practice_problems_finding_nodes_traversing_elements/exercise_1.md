# Practice Problems: Finding Nodes and Traversing Elements

## Exercise 1

This problem uses the Polar Bear Wikipedia page:
  * [Original Link](https://en.wikipedia.org/wiki/Polar_bear)
  * [Saved Webpage](https://d3905n0khyu9wc.cloudfront.net/the_dom/polar_bear_wiki.html).

Write some JavaScript code to retrieve a word count for each h2 heading on the page.

### Answer

```
var h2Elems = document.querySelectorAll('h2');
Array.prototype.slice.call(h2Elems).map(function(h2Elem) {
  return h2Elem.textContent.trim().split(' ').length;
});
```
