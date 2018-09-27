$(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $form = $(this);
    var itemName = $('#name').val();
    var itemQuantity = $('#quantity').val() || '1';

    $('ul').append('<li>' + itemQuantity + ' ' + itemName + '</li>');
    $form[0].reset();
  });
});
