# Assignment: Build an Input Box

In this assignment, we'll use HTML, CSS, and JavaScript to build an approximation of an input element. You'll never do this in a real project, but doing so here gives us an opportunity to create an interface that must handle more than one event type.

We'll use the following HTML and CSS for this problem:

```
<div class="text-field">
  <div class="content"></div>
</div>
```

```
.text-field {
  border: solid 1px #ccc;
  padding: 1em;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 18px;
  overflow: hidden;
  width: 300px;
}

.text-field .content {
  display: inline-block;
  height: 21px;
  float: left;
  white-space: pre;
}

.text-field.focused {
  border-color: black;
}

.text-field.cursor .content {
  border-right: solid 2px black;
}
```

We'll build the functionality in increments. When we refer to the *text-field element*, we mean the element that has a class of `text-field`. Likewise, the *content* element has a class of `content`.

## Step 1

Write JavaScript to add the `focused` class to the text-field element when the user clicks the element.

### Answer

```
document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector('div.text-field');
  var contentBox = document.querySelector('div.content');

  textField.addEventListener('click', function(event) {
    textField.classList.add('focused');
  });
});
```

## Step 2

Write JavaScript that removes the focused class from the text-field element when the user clicks the document.

### Answer

```
document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector('div.text-field');
  var contentBox = document.querySelector('div.content');

  textField.addEventListener('click', function(event) {
    event.stopPropagation();
    textField.classList.add('focused');
  });

  document.addEventListener('click', function(event) {
    textField.classList.remove('focused');
  });
});
```

## Step 3

Write JavaScript to create an interval that adds or removes the class `cursor` from the text-field element every 500 milliseconds after the user clicks the text-field element. The code should toggle the `cursor` class every 500ms: on with one cycle, off with the next.

### Answer

```
document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector('div.text-field');
  var contentBox = document.querySelector('div.content');

  textField.addEventListener('click', function(event) {
    event.stopPropagation();
    textField.classList.add('focused');
    setInterval(function() {
      textField.classList.toggle('cursor');
    }, 500);
  });

  document.addEventListener('click', function(event) {
    textField.classList.remove('focused');
  });
});
```

## Step 4

When the user clicks anywhere in the document, clear the interval that adds and removes the `cursor` class.

### Answer

```
document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector('div.text-field');
  var contentBox = document.querySelector('div.content');
  var cursorInterval;

  textField.addEventListener('click', function(event) {
    event.stopPropagation();
    textField.classList.add('focused');
    cursorInterval = setInterval(function() {
      textField.classList.toggle('cursor');
    }, 500);
  });

  document.addEventListener('click', function(event) {
    textField.classList.remove('focused');
    clearInterval(cursorInterval);
    textField.classList.remove('cursor');
  });
});
```

## Step 5

When the user presses a keyboard key while the text-field element has the `focused` class, append the String value of the key to the content element. Ignore keyboard entries when the text-field element does not have the `focused` class.

### Answer

```
document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector('div.text-field');
  var contentBox = document.querySelector('div.content');
  var cursorInterval;

  textField.addEventListener('click', function(event) {
    event.stopPropagation();
    textField.classList.add('focused');
    cursorInterval = setInterval(function() {
      textField.classList.toggle('cursor');
    }, 500);
  });

  document.addEventListener('keypress', function(event) {
    if (textField.classList.contains('focused')) {
      contentBox.textContent += event.key;
    }
  });

  document.addEventListener('click', function(event) {
    textField.classList.remove('focused');
    clearInterval(cursorInterval);
    textField.classList.remove('cursor');
  });
});
```

## Step 6

When the user presses the Backspace key while the text-field element has the focused class, delete the last character from the text within the content element.

### Answer

```
document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector('div.text-field');
  var contentBox = document.querySelector('div.content');
  var cursorInterval;

  textField.addEventListener('click', function(event) {
    event.stopPropagation();
    textField.classList.add('focused');
    cursorInterval = setInterval(function() {
      textField.classList.toggle('cursor');
    }, 500);
  });

  document.addEventListener('keypress', function(event) {
    if (textField.classList.contains('focused')) {
      contentBox.textContent += event.key;
    }
  });

  document.addEventListener('keydown', function(event) {
    if (textField.classList.contains('focused') && event.key === 'Backspace') {
      contentBox.textContent = contentBox.textContent.slice(0, -1);
    }
  });

  document.addEventListener('click', function(event) {
    textField.classList.remove('focused');
    clearInterval(cursorInterval);
    textField.classList.remove('cursor');
  });
});
```

## Step 7

The current solution has a subtle bug. If you click consecutively on the text-field element the cursor will blink chaotically. This happens because there are as many "intervals" added as there are clicks. Write JavaScript that only sets the interval if it hasn't been set yet.

### Answer

```
document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector('div.text-field');
  var contentBox = document.querySelector('div.content');
  var cursorInterval;

  textField.addEventListener('click', function(event) {
    event.stopPropagation();
    textField.classList.add('focused');
    if (!cursorInterval) {
      cursorInterval = setInterval(function() {
        textField.classList.toggle('cursor');
      }, 500);
    }
  });

  document.addEventListener('keypress', function(event) {
    if (textField.classList.contains('focused')) {
      contentBox.textContent += event.key;
    }
  });

  document.addEventListener('keydown', function(event) {
    if (textField.classList.contains('focused') && event.key === 'Backspace') {
      contentBox.textContent = contentBox.textContent.slice(0, -1);
    }
  });

  document.addEventListener('click', function(event) {
    textField.classList.remove('focused');
    if (cursorInterval) {
      clearInterval(cursorInterval);
      cursorInterval = null;
    }
    textField.classList.remove('cursor');
  });
});
```
