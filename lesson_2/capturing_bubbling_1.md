# Capturing and Bubbling (1)

## Problem 1

Reverse the behavior of this scenario. Have the alert box of the div element show up first.

```
<div id="elem1">1
  <section id="elem2">2
    <article id="elem3">3
      <main id="elem4">4
      </main>
    </article>
  </section>
</div>
```

```
#elem1 {
  background-color: green;
  position: relative;
  width: 200px;
  height: 200px;
  text-align: center;
  cursor: pointer;
}

#elem2 {
  background-color: blue;
  position: absolute;
  top: 25px;
  left: 25px;
  width: 150px;
  height: 150px;
}

#elem3 {
  background-color: red;
  position: absolute;
  top: 25px;
  left: 25px;
  width: 100px;
  height: 100px;
  line-height: 25px;
}

#elem4 {
  background-color: yellow;
  position: absolute;
  top: 25px;
  left: 25px;
  width: 50px;
  height: 50px;
  line-height: 50px;
}
```

```
var elem1 = document.querySelector('#elem1');
var elem4 = document.querySelector('#elem4');

elem1.addEventListener('click', function(event) {
  alert(event.currentTarget.tagName);
});

elem4.addEventListener('click', function(event) {
  alert(event.currentTarget.tagName);
});
```

### Answer

Set the `useCapture` param of the `elem1` event listener to `true`, so that the event fires during the 'capture' phase rather than the 'bubbling' phase.

```
var elem1 = document.querySelector('#elem1');
var elem4 = document.querySelector('#elem4');

elem1.addEventListener('click', function(event) {
  alert(event.currentTarget.tagName);
}, true);

elem4.addEventListener('click', function(event) {
  alert(event.currentTarget.tagName);
});
```

## Problem 2

Study the example below.

```
<body>
  <div class="d1 pick">1
    <section class="d2 pick">2
      <div class="d3">3
        <main class="d4 pick">4
        </main>
      </div>  
    </section>
  </div>
</body>
```

```
.d1 {
  background-color: green;
  position: relative;
  width: 200px;
  height: 200px;
  text-align: center;
  cursor: pointer;
}

.d2 {
  background-color: blue;
  position: absolute;
  top: 25px;
  left: 25px;
  width: 150px;
  height: 150px;
}

.d3 {
  background-color: red;
  position: absolute;
  top: 25px;
  left: 25px;
  width: 100px;
  height: 100px;
  line-height: 25px;
}

.d4 {
  background-color: yellow;
  position: absolute;
  top: 25px;
  left: 25px;
  width: 50px;
  height: 50px;
  line-height: 50px;
}
```

```
var divs = document.querySelectorAll('.pick');
var i;
for(i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', highlightThis, true);
}

function highlightThis(e) {
  alert(this.className + ' ' + e.currentTarget.tagName);
}
```

  * Can you predict what happens when you click on "4"?
  * If we add the following line of code, what will happen?

```
document.querySelector('.d3').addEventListener('click', highlightThis, false);
```

### Answer

  * Since the `useCapture` param of the event listeners is set to `true`, when we click on 4, the click event will trigger 3 listeners during the 'capture' phase (one for each element with a class of `pick`), starting with the outermost and out to the innermost. Each listener will create an alert containing the className of the element followed by the tagname.
  * If we add the line of code, a fourth event listener will be triggered, but instead during the 'bubbling' phase, since the `useCapture` param of that listener is set to `false`. This listener will fire last (after the other 3), so the order will be: `d1` > `d2` > `d4` > `d3`.

## Problem 3

Check out the HTML structure and the JavaScript code. How many alert boxes do you think will fire when the yellow box is clicked? Why?

```
<div id="elem0">0</div>
<div id="elem1">1
  <section id="elem2">2
    <article id="elem3">3
      <main id="elem4">4
      </main>
    </article>
  </section>
</div>
```

```
#elem0 {
  width: 250px;
  height: 250px;
  position: absolute;
  background-color: orange;
  text-align: center;
  cursor: pointer;
}

#elem1 {
  background-color: green;
  position: relative;
  top: 25px;
  left: 25px;
  width: 200px;
  height: 200px;
  text-align: center;
  cursor: pointer;
}

#elem2 {
  background-color: blue;
  position: absolute;
  top: 25px;
  left: 25px;
  width: 150px;
  height: 150px;
}

#elem3 {
  background-color: red;
  position: absolute;
  top: 25px;
  left: 25px;
  width: 100px;
  height: 100px;
  line-height: 25px;
}

#elem4 {
  background-color: yellow;
  position: absolute;
  top: 25px;
  left: 25px;
  width: 50px;
  height: 50px;
  line-height: 50px;
}
```

```
var elem0 = document.querySelector('#elem0');
var elem1 = document.querySelector('#elem1');
var elem4 = document.querySelector('#elem4');

elem0.addEventListener('click', function(event) {
  alert(event.currentTarget.tagName);
});

elem1.addEventListener('click', function(event) {
  alert(event.currentTarget.tagName);
}, true);

elem4.addEventListener('click', function(event) {
  alert(event.currentTarget.tagName);
});
```

### Answer

There will be two alert boxes. Although there are event listeners on three separate elements, `elem0` isn't a parent element of `elem4` (the clicked on element), and so is not passed in either the capture or bubbling phases.
