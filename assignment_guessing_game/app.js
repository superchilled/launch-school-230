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
