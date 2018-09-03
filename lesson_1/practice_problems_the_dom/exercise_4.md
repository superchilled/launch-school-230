# Practice Problems: the DOM

## Exercise 4

This problem uses [this test page](http://d186loudes4jlv.cloudfront.net/fe2/exercises_objects_and_dom/dom_assignment.html).

Add an `onclick` event to the element we show and hide above. This time, the function should set the class of the element to `'hidden'`. This event will let you hide the visible element by clicking on it. As with the previous function, the first thing the function should do is invoke `e.preventDefault()`.

Inside your function, this points to the current DOM element, which means that you can use `this.setAttribute` to change its class; you don't have to locate it first with `getElementById`.

### Answer

```
document.getElementById('notice').onclick = function(e) {
  e.preventDefault();
  this.classList.replace('visible', 'hidden');
};
```
