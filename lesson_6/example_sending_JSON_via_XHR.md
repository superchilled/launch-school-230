# Example: Sending JSON via XHR

## Question 1

```
var request = new XMLHttpRequest();
request.open('POST', 'http://ls-230-book-catalog.herokuapp.com/books');

request.setRequestHeader('Content-Type', 'application/json');

var data = { title: 'Programming Ruby', author: 'Dave Thomas' };
var json = JSON.stringify(data);

request.send(json);
```

Write out the raw text of the HTTP request the example above will send to the server.

### Answer

```
POST /books HTTP/1.1
Host: ls-230-book-catalog.herokuapp.com
Content-Type: application/json
Accept: */*

{
  title: 'Programming Ruby',
  author: 'Dave Thomas'
}
```

## Question 2

Write some JavaScript to create a new product by sending a request to the JSON API on our web store. To create a product, make a POST request to `https://ls-230-web-store-demo.herokuapp.com/v1/products`. You can find out the required parameters by viewing the API documentation.

### Answer

```
var request = new XMLHttpRequest();
request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');

request.setRequestHeader('Authorization', 'token AUTH_TOKEN');
request.setRequestHeader('Content-Type', 'application/json');

var data = { name: 'A new Product', sku: 'new100', price: '100' };
var json = JSON.stringify(data);

request.send(json);
```
