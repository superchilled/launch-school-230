# Practice Problems: the DOM

## Exercise 3

This problem uses [this test page](http://d186loudes4jlv.cloudfront.net/fe2/exercises_objects_and_dom/dom_assignment.html).

In this problem and the next, we'll use the `onclick` Element property. You don't need to know much about `onclick` right now, but take a minute to read this [link](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick). We'll learn more about `onclick` later when we talk about event listeners. For now, the onclick property lets you detect when the user clicks an element.

Our page has an element that you can't see initially; it's hidden. When the user clicks the link, the browser should display the hidden item; the next click on that link should hide the revealed item. Each click should toggle the hidden element between the visible and hidden states.

Use the Inspector to find the hidden element and determine its ID, then use the ID to set the `onclick` property to a function that makes the element visible when it's hidden and hides it when it's visible. You can use `getAttribute` to access the class, and setAttribute to set it; the class names of interest are `'visible'` and `'hidden'`.

You will have to write a multi-line expression in the console. To do this, hold the Shift key down when you press Enter. Otherwise, the browser will try to execute your partial code and raise an error.

Your function should take a single argument, e. The first line of your function should invoke `e.preventDefault()`. We'll discuss this later when we talk more about events, but, for now, just be aware that `preventDefault()` tells your browser that it shouldn't try to follow the link.

### Answer

```
var toggleLink = document.getElementById('toggle');
var hiddenElem = document.getElementById('notice');
toggleLink.onclick = function(e) {
  e.preventDefault();
  if (hiddenElem.classList.contains('visible')) {
    hiddenElem.classList.replace('visible', 'hidden');
  } else if (hiddenElem.classList.contains('hidden')) {
    hiddenElem.classList.replace('hidden', 'visible');
  } else {
    hiddenElem.classList.add('visible');
  }
};
```
