# Assignment: Guessing Game

## Step 1

Create an event listener that will run when the document's `DOMContentLoaded` event fires. In the subsequent steps, you'll add code to this event listener so that it will run when the page finishes loading.

### Answer

```
document.addEventListener('DOMContentLoaded', function() {

});
```

## Step 2

Create a local variable named `answer` in the `DOMContentLoaded` listener. Its value should be a randomly generated integer between `1` and `100`, inclusive.

### Answer

```
document.addEventListener('DOMContentLoaded', function() {
  var answer = Math.floor(Math.random() * 100) + 1;
});
```

## Step 3

Add an event listener that will run when the user submits the form. It should retrieve the value from the `input` text field and convert it to a number with `parseInt`. Store the number in a local variable named `guess`.

The browser shouldn't send the form content to the server; you can prevent it from doing that with `preventDefault`. If you do send the data, the page will refresh after each submission and you'll lose everything!

### Answer

```
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  var guess = parseInt(document.getElementById('guess').value, 10);
});
```

## Step 4

Create a local variable named `message`. We will use `message` in subsequent problems to store a message that we will show to the user.

### Answer

```
var message;
```

## Step 5

Check whether the guess is higher than the answer. If it is, set the `message` variable to a message that says the answer is lower than the guess.

### Answer

```
if (guess > answer) {
  message = 'My number is lower than ' + String(guess);
}
```

## Step 6

Update the code so that it sets `message` to an appropriate value when the answer is higher than the guess, and another message when it is correct.

### Answer

```
if (guess > answer) {
  message = 'My number is lower than ' + String(guess);
} else if (guess < answer) {
  message = 'My number is higher than ' + String(guess);
} else {
  message = 'You guessed it! It took you ' + String(numberOfGuesses) + ' guesses.';
}
```

## Step 7

Display the message determined by problems 5 and 6 to the page. Find the message element on the page with `querySelector` and set its `textContent` property to the value of `message`.

### Answer

```
var messageElem = document.querySelector('p');

messageElem.textContent = message;
```

## Step 8

Add an event listener that fires when the user clicks the "New game" link.

### Answer

```
document.querySelector('a').addEventListener('click', function(event) {
  event.preventDefault();
});
```

## Step 9

In the event listener for a new game, change the answer to a new random number from 1 to 100, and set the message shown to the user to one that asks the player to guess a number.

### Answer

```
answer = oneToOneHundred();
messageElem.textContent = 'Guess a number from 1 to 100';
document.querySelector('input#guess').value = '';
```

## Step 10

In question 9, we assigned the `paragraph` variable's `textContent` property to the message. Will this code work? Why or why not?

### Answer

Yes, this should work as long as the variable is declared outside the 'inner' event listeners.

## Step 11

Bonus Question If you want an extra challenge, add the following features:

  1. Check whether the input value is a valid integer; display an appropriate message if it is not.
  2. Disable the Guess button once the user guesses the number. (You may need to use MDN to find out how to do this.) When you disable the box, it should also change to a dimmer color (your choice) and take on a flatter appearance (use the box-shadow property).


### Answer

Finished code:

```
function oneToOneHundred() {
  return Math.floor(Math.random() * (100 - 1 + 1) + 1);
};

document.addEventListener('DOMContentLoaded', function() {
  var answer = oneToOneHundred();
  var numberOfGuesses = 0;
  var messageElem = document.querySelector('p');
  var submitButton = document.querySelector('input[type="submit"]');

  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var guess = parseInt(document.getElementById('guess').value, 10);
    var message;
    if (Number.isInteger(guess) && guess > 0 && guess <= 100 ) {
      if (guess > answer) {
        message = 'My number is lower than ' + String(guess);
      } else if (guess < answer) {
        message = 'My number is higher than ' + String(guess);
      } else {
        message = 'You guessed it! It took you ' + String(numberOfGuesses) + ' guesses.';
        submitButton.disabled = true;
        submitButton.classList.add('btn-disabled');
      }
      numberOfGuesses++;
    } else {
      message = 'Invalid number. Please choose a number from 1 to 100'
    }

    messageElem.textContent = message;
  });

  document.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault();
    answer = oneToOneHundred();
    messageElem.textContent = 'Guess a number from 1 to 100';
    document.querySelector('input#guess').value = '';
    numberOfGuesses = 0;
    submitButton.disabled = false;
    submitButton.classList.remove('btn-disabled');
  });
});
```

Note: LS solution uses the `:disabled` pseudo class instead of adding and removing classes from the class list.
