$(function() {
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
      createBlanks: function() {
        var wordLength = this.word.length;
        var $wordContainer = $('#spaces');
        $wordContainer.find('span').remove();
        var $letterSpace = $('<span></span>');
        for (var i = 0; i < wordLength; i++) {
          $wordContainer.append($letterSpace.clone());
        }
      },
  };

  for (var i = 0; i < 3; i++) {
    var newGame = Object.create(Game).init();

    if (newGame.word) {
      console.log(newGame.word);
      newGame.createBlanks();
    } else {
      $('#message').text("Sorry, I've run out of words!");
      $('#replay').remove();
    }
  }
});
