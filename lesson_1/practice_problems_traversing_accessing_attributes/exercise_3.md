# Practice Problems: Traversing and Accessing Attributes

## Exercise 3

Retrieve the first word from each paragraph on the page and log the entire list.

### Answer

```
var firstWords = [];
var paragraphs = [];
walk(document, function(node) {
    if (node.nodeName === 'P') {
        paragraphs.push(node);
    }
});
paragraphs.forEach(function(paragraph) {
  var firstWord;
   var words = paragraph.firstChild.nodeValue.split(' ').filter(function(word) {
      return word.match(/\S/);
    });
  firstWords.push(words[0]);
});
console.log(firstWords);
```
