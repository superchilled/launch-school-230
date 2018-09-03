# Practice Problems: the DOM

## Exercise 5

This problem uses [this test page](http://d186loudes4jlv.cloudfront.net/fe2/exercises_objects_and_dom/dom_assignment.html).

Locate the multiplication paragraph and change the text to the result of the arithmetic problem. Use the [innerText](https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText) property.

### Answer

```
var mathQuestion = document.getElementById('multiplication');
var questionText = mathQuestion.innerText;
var firstOperand;
var secondOperand;
var operator;
var operations = {
  plus: function(a, b) { return a + b },
  minus: function(a, b) { return a - b },
  times: function(a, b) { return a * b },
  divided: function(a, b) { return a / b },
};
[firstOperand, operator, secondOperand] = questionText.replace('What\'s', '').replace('?', '').trim().split(' ');
var result = operations[operator](Number(firstOperand), Number(secondOperand));
mathQuestion.innerText = String(result);
```
