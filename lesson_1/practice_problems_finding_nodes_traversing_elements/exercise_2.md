# Practice Problems: Finding Nodes and Traversing Elements

## Exercise 2

This problem uses the Polar Bear Wikipedia page:
  * [Original Link](https://en.wikipedia.org/wiki/Polar_bear)
  * [Saved Webpage](https://d3905n0khyu9wc.cloudfront.net/the_dom/polar_bear_wiki.html).

The page has a table of contents with the title "Contents" and links to the different content sections on "Naming and etymology," "Taxonomy and evolution," etc.

Use three different DOM methods to retrieve a reference to the div element that contains the table of contents.

### Answer

```
document.querySelector('#toc');
document.querySelectorAll('#toc')[0];
document.getElementById('toc')
```
