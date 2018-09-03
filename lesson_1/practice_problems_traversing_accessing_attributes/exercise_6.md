# Practice Problems: Traversing and Accessing Attributes

## Exercise 6

Use [this Wikipedia page](https://en.wikipedia.org/wiki/Polar_bear).

Change the link color to red for every link on the page.

### Answer

```
walk(document, function(node) {
    if (node.nodeName === 'A') {
        node.style.color = 'red';
    }
});
```
