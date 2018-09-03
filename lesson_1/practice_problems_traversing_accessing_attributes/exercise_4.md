# Practice Problems: Traversing and Accessing Attributes

## Exercise 4

Add the class stanza to each paragraph except the first.

### Answer

```
var paragraphs = [];
walk(document, function(node) {
    if (node.nodeName === 'P') {
        paragraphs.push(node);
    }
});
paragraphs.slice(1).forEach(function(paragraph) {
  paragraph.classList.add('stanza');
});
```
