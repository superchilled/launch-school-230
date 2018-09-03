# Practice Problems: Traversing and Accessing Attributes

## Exercise 2

Count and log the paragraphs on the page.

### Answer

```
var paragraphCount = 0;
walk(document, function(node) {
    if (node.nodeName === 'P') {
        paragraphCount += 1;
        console.log(node);
    }
});
console.log('There are ' + String(paragraphCount) + ' paragrpahs on the page.')
```
