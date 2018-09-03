# Practice Problems: the DOM

## Exercise 6

This problem uses [this test page](http://d186loudes4jlv.cloudfront.net/fe2/exercises_objects_and_dom/dom_assignment.html).

Set the ID of the `body` element to `'styled'` to apply the rest of the styles from the original file. The body tag in this file doesn't have an ID, so you must locate it by some other means.

### Answer

```
document.body.setAttribute('id', 'styled');
```
