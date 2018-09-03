# Practice Problems: Traversing and Accessing Attributes

## Exercise 1

Starting with the `document` node, use the `lastChild` and `childNodes` properties to change the text color to red on the `On the River` heading and set its font size 48 pixels.

### Answer

```
var h1 = document.lastChild.lastChild.childNodes[1];
h1.style.color = 'red';
h1.style.fontSize = '48px';
```
