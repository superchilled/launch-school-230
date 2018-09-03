# Practice Problems: Finding Nodes and Traversing Elements

## Exercise 5

This problem uses the Polar Bear Wikipedia page:
  * [Original Link](https://en.wikipedia.org/wiki/Polar_bear)
  * [Saved Webpage](https://d3905n0khyu9wc.cloudfront.net/the_dom/polar_bear_wiki.html).

You can think of the scientific classification of an animal as a series of key-value pairs. Here, the keys are taxonomic ranks (Domain, Kingdom, Phylum, etc.). The values are the specific groups to which the animal belongs.

Write JavaScript code that extracts this information from the web page and logs an Object that uses the ranks as keys and the groups as values.

### Answer

```
var classifications = {};
var pushRow = false;
var infoTableRows = document.querySelectorAll('table.infobox tr');
var classificationRows = [];
Array.prototype.slice.call(infoTableRows).forEach(function(row) {
  var firstChildElem = row.firstElementChild;
  if (firstChildElem.tagName === 'TH' && firstChildElem.textContent.trim() === 'Binomial name') {
    pushRow = false;
  }
  if (pushRow) {
    classificationRows.push(row);
  }
  if (firstChildElem.tagName === 'TH' && firstChildElem.textContent.trim() === 'Scientific classification') {
    pushRow = true;
  }
});
classificationRows.forEach(function(row) {
  var k = row.firstElementChild.textContent.trim().replace(':', '');
  var v = row.lastElementChild.textContent.trim().replace(':', '');
  classifications[k] = v;
});
```
