# Making a Request with XMLHttpRequest

## Question 1

Write JavaScript code that makes a GET request to this URL: https://api.github.com/repos/rails/rails.

### Answer

```
var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.send();
```

## Question 2

What property will contain the response body after the request from the previous problem completes?

### Answer

`XMLHttpRequest.response`