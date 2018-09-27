$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var $char = $('input[type=text]').val();
    if ($char) {
      var $charCode = $char.charCodeAt(0);

      $(document).off('keypress').on('keypress', function(event) {
        event.preventDefault();
        if (event.which !== $charCode) {
          return;
        }

        $('a').trigger('click');
      });
    } else {
      alert('Please enter a character');
    }
  });
  $('a').on('click', function(event) {
    event.preventDefault();
    $('div').slideToggle();
  })
});
