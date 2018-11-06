# Example: Submitting a Form via XHR

## Question 1

Recall that the product edit form didn't work properly in the last assignment. Make changes to the JavaScript to submit the edit form using `XMLHttpRequest`. Once your code is working, you should see the message — "You must be logged in to do that." — when you try to submit the form. We'll deal with this in the next problem.

### Answer

```
document.addEventListener('DOMContentLoaded', function() {
  var store = document.getElementById('store');

  var request = new XMLHttpRequest();
  request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com/products');
  request.send();

  request.addEventListener('load', function(event) {
    store.innerHTML = request.response;
  });

  store.addEventListener('click', function(event) {
    var target = event.target;
    if (target.tagName !== 'A') {
      return;
    }

    event.preventDefault();

    var request = new XMLHttpRequest();

    request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com' + target.getAttribute('href'));
    request.send();

    request.addEventListener('load', function(event) {
      store.innerHTML = request.response;
    });

  });

  store.addEventListener('submit', function(event) {
    var target = event.target;
    if (target.tagName !== 'FORM') {
      return;
    }

    event.preventDefault();

    var data = new FormData(target);
    var request = new XMLHttpRequest();
    request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com' + target.getAttribute('action'));

    request.addEventListener('load', function(event) {
      store.innerHTML = request.response;
    });

    request.send(data);

    });

});
```

## Question 2

The message, "You must be logged in to do that", tells us that the user must provide the proper authentication credentials; that is, they must prove they have the authority to update the product information. Without credentials, anybody in the world can change the product information. One way to authenticate is to provide a special header that contains an authentication token that only an authorized client should know. In a real application, the user would login to a site, which in turn would return a unique token, possible via a cookie. For now, we'll add the header manually with a simple (and insecure) string.

Modify the code you wrote in the previous exercise to add an `Authorization` header to the `XMLHttpRequest` before sending it. The header's value should be token `AUTH_TOKEN`.

### Answer

```
document.addEventListener('DOMContentLoaded', function() {
  var store = document.getElementById('store');

  var request = new XMLHttpRequest();
  request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com/products');
  request.send();

  request.addEventListener('load', function(event) {
    store.innerHTML = request.response;
  });

  store.addEventListener('click', function(event) {
    var target = event.target;
    if (target.tagName !== 'A') {
      return;
    }

    event.preventDefault();

    var request = new XMLHttpRequest();

    request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com' + target.getAttribute('href'));
    request.send();

    request.addEventListener('load', function(event) {
      store.innerHTML = request.response;
    });

  });

  store.addEventListener('submit', function(event) {
    var target = event.target;
    if (target.tagName !== 'FORM') {
      return;
    }

    event.preventDefault();

    var data = new FormData(target);
    var request = new XMLHttpRequest();
    
    request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com' + target.getAttribute('action'));

    request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

    request.addEventListener('load', function(event) {
      store.innerHTML = request.response;
    });

    request.send(data);

    });

});
```
