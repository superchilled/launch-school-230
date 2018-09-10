# The Event Object

## Problem 1

Starting with the template below, write some JavaScript code to move the red X to the last position in the document that the user clicked.

```
<!-- html -->
<div class="x">
  <div class="horizontal"></div>
  <div class="vertical"></div>
</div>
```

```
/* css */
.x {
  position: absolute;
  transform: rotate(45deg);
  top: 20px;
  left: 20px;
}

.x .horizontal {
  width: 45px;
  height: 5px;
  position: absolute;
  left: -20px;
  background: red;
}

.x .vertical {
  height: 45px;
  width: 5px;
  background: red;
  position: absolute;
  left: 0px;
  top: -20px;
}
```

### Answer

```
function moveCross(event) {
  var cross = document.querySelector('div.x');
  cross.style.top = event.clientY + 'px';
  cross.style.left = event.clientX + 'px';
};

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', moveCross);
});
```

## Problem 2

Update your solution to the previous problem to make the red X move as you move the mouse around the document instead of depending on clicks.

### Answer

```
function moveCross(event) {
  var cross = document.querySelector('div.x');
  cross.style.top = event.clientY + 'px';
  cross.style.left = event.clientX + 'px';
};

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('mousemove', moveCross);
});
```

## Problem 3

Update your solution to the previous problem to change the color of the red X to blue when the user presses the `b` key, green in response to the `g` key, and red in response to `r`. The X should continue to follow the mouse around.

### Answer

```
function moveCross(event) {
  var cross = document.querySelector('div.x');
  cross.style.top = event.clientY + 'px';
  cross.style.left = event.clientX + 'px';
};

function changeCrossColor(event) {
  var crossHorizontal = document.querySelector('div.horizontal');
  var crossVertical = document.querySelector('div.vertical');
  if (event.key === 'b') {
    crossHorizontal.style.background = 'blue';
    crossVertical.style.background = 'blue';
   } else if (event.key === 'g') {
     crossHorizontal.style.background = 'green';
     crossVertical.style.background = 'green';            
   } else if (event.key === 'r') {
     crossHorizontal.style.background = 'red';
     crossVertical.style.background = 'red';           
   }
};

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('mousemove', moveCross);
  document.addEventListener('keypress', changeCrossColor);
});
```

## Problem 4

Using the following code, write some JavaScript to add a character counter that updates as the user types. The text should turn red when you have more than 140 characters in the text box.

```
<!-- html -->
<div class="composer">
  <textarea placeholder="Enter your message"></textarea>
  <p class="counter"></p>
  <button type="submit">Post Message</button>
</div>
```

```
/* css */
.composer {
  background: #f5f5f5;
  padding:  1em;
  width:  30em;
}

.composer textarea {
  width: 100%;
  height: 4em;
}

.composer textarea.invalid {
  color: red;
}
```

### Answer

```
<!-- html -->
<div class="composer">
  <textarea placeholder="Enter your message"></textarea>
  <p class="counter"><span id='char-count'>140</span> characters remaining</p>
  <button type="submit">Post Message</button>
</div>
```

```
// javascript
function wordCount(event) {
  var maxChars = 140;
  var wordCount = event.target.textLength;
  var remainingchars = maxChars - wordCount;
  var counter = document.querySelector('span#char-count');
  counter.innerText = String(remainingchars);
  if (wordCount > 140) {
    event.target.classList.add('invalid');
  } else {
    event.target.classList.remove('invalid');
  }
};

document.addEventListener('DOMContentLoaded', function() {
  var textBox = document.querySelector('textarea');
  textBox.addEventListener('keyup', wordCount);
});
```
