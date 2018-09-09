# Repeating Execution with setInterval

## Problem 1

Write a function named `startCounting` that logs a number to the console every second, starting with `1`. Each number should be one greater than the previous number.

### Answer

```
function startCounting() {
  var i = 1;
  return setInterval(function() {
      console.log(i);
      i++;
  }, 1000);
};
```

## Problem 2

Extend the code from the previous problem with a stopCounting function that stops the logger when called.

### Answer

```
var interval;

function startCounting() {
  var i = 1;
  interval = setInterval(function() {
      console.log(i);
      i++;
  }, 1000);
};
function stopCounting() {
  clearInterval(interval);
}
```
