$(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    var numerator = Number.parseInt($('#numerator').val());
    var denominator = Number.parseInt($('#denominator').val());
    var operator = $('#operator').val();
    var sum;
    switch (operator) {
      case '+':
        sum = numerator + denominator;
        break;
      case '-':
        sum = numerator - denominator;
        break;
      case '*':
        sum = numerator * denominator;
        break;
      case '/':
        sum = numerator / denominator;
        break;
    }

    $('h1').text(sum);
  });
});
