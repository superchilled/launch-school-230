# Practice Problems: Finding Nodes and Traversing Elements

## Exercise 3

This problem uses the Polar Bear Wikipedia page:
  * [Original Link](https://en.wikipedia.org/wiki/Polar_bear)
  * [Saved Webpage](https://d3905n0khyu9wc.cloudfront.net/the_dom/polar_bear_wiki.html).

Write some JavaScript code to change the color for every other link in the table of contents to green.

### Answer

```
var contents = document.querySelector('#toc');
var links = contents.querySelectorAll('a');
Array.prototype.slice.call(links).forEach(function(link, idx) {
  if(idx % 2 === 1) {
    link.style.color = 'green';
  }
});
```
