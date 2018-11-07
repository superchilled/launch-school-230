# Example: Loading JSON via XHR

## Question 1

Write some JavaScript code that loads JSON data from `https://api.github.com/repos/rails/rails`, parses the JSON into a JavaScript object, and then logs the HTTP status code and the number of open issues to the console.

### Answer

```
var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.responseType = 'json';

request.addEventListener('load', function(event) {

  var data = request.response;
  console.log(typeof request.status);

  if (data) {
    console.log(data.open_issues);
  }
});

request.send();
```

## Question 2

Extend the code from the previous exercise to log the message `'The request could not be completed!'` to the console when the request produces an error.

### Answer

```
var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails/blah');
request.responseType = 'json';

request.addEventListener('load', function(event) {

  var data = request.response;
  console.log(request.status);

  if (data) {
    console.log(data.open_issues);
  }
});

request.addEventListener('error', function(event) {
  console.log('The request could not be completed!');
});

request.send();
```
