$(function() {
  var $wordContainer = $('#spaces');
  var $guessesContainer = $('#guesses');
  var $replayLink = $('#replay');
  var $message = $('#message');
  var $body = $('body');
  var $apples = $('#apples');

  var randomWord = (function() {
    var words = ['apple', 'banana', 'orange', 'pear', 'strawberry'];

    return function() {
      if (words.length > 0) {
        var idx = Math.floor(Math.random() * (words.length));
        return words.splice(idx, 1)[0];
      }
    };
  })();

  var Game = {
      init: function() {
        this.word = randomWord();
        this.incorrectGuesses = 0;
        this.allowedGuesses = 6;
        this.lettersGuessed = [];
        return this;
      },
      startGame: function() {
        $replayLink.hide();
        if (this.word) {
          this.createBlanks();
          $(document).keypress(gameEngine);
        } else {
          $message.text("Sorry, I've run out of words!");
        }
      },
      reset: function() {
        $message.text('');
        $body.removeClass();
        $apples.removeClass();
        $wordContainer.find('span').remove();
        $guessesContainer.find('span').remove();
        this.init();
        this.startGame();
      },
      createBlanks: function() {
        var wordLength = this.word.length;
        $wordContainer.find('span').remove();
        var $letterSpace = $('<span></span>');
        for (var i = 0; i < wordLength; i++) {
          $wordContainer.append($letterSpace.clone());
        }
      },
      validLetter: function(letter) {
        return letter >= 'a' && letter <= 'z' && !this.lettersGuessed.includes(letter)
      },
      findIndices: function(letter) {
        var indices = [];
        for (var i = 0; i < this.word.length; i++) {
          if (this.word[i] === letter) {
            indices.push(i);
          }
        }
        return indices;
      },
      gameWon: function() {
        return $('#spaces span').text() === this.word;
      },
      guessesRemaining: function() {
        return this.incorrectGuesses >= this.allowedGuesses;
      },
      endGame: function(message, className) {
        $message.text(message);
        $body.attr('class', className);
        $replayLink.show();
        $(document).unbind('keypress');
      },
  };

  var game = Object.create(Game).init();
  game.startGame();

  function gameEngine(event) {
    var pressedKey = event.key;

    if (game.validLetter(pressedKey)) {
      game.lettersGuessed.push(pressedKey);
      $guessesContainer.append('<span>' + pressedKey + '</span>');

      if (game.word.includes(pressedKey)) {
        var letterIndices = game.findIndices(pressedKey);
        var $spans = $('#spaces span');
        letterIndices.forEach(function(index) {
          $($spans[index]).text(pressedKey);
        });
      } else {
        game.incorrectGuesses += 1;
        var newClass = 'guess_' + String(game.incorrectGuesses);
        console.log(newClass);
        $apples.attr('class', newClass);
      }

      if (game.gameWon()) {
        game.endGame("You win!", 'win');
      }

      if (game.guessesRemaining()) {
        game.endGame("Sorry! You're out of guesses", 'lose');
      }
    }
  };

  $replayLink.on('click', function(event) {
    event.preventDefault();
    game.reset();
  });

});
