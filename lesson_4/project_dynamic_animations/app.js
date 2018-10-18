$(function() {
  var $canvas = $('#canvas');

  $('form').on('submit', function(event) {
    event.preventDefault();
    var formValues = $(this).serializeArray();
    var type = formValues[0].value;
    var startX = formValues[1].value;
    var startY = formValues[2].value;
    var endX = formValues[3].value;
    var endY = formValues[4].value;
    var shape = $("<div></div>");
    shape.addClass('shape ' + type);
    shape.css({
      'top': Number(startY),
      'left': Number(startX)
    });
    shape.attr({
      'data-startx': startX,
      'data-starty': startY,
      'data-endx': endX,
      'data-endy': endY
    });
    $canvas.append(shape);
  });

  $('#animate').on('click', function(event) {
    event.preventDefault();

    $('.shape').stop();
    $('.shape').each(function() {

      $(this).css({
        'top': Number($(this).attr('data-starty')),
        'left': Number($(this).attr('data-startx'))
      });

      $(this).animate({
        'top': $(this).attr('data-endy'),
        'left': $(this).attr('data-endx')
      }, 1000);
    });
  });

  $('#stop').on('click', function(event) {
    event.preventDefault();
    $('.shape').stop();
  });
});
