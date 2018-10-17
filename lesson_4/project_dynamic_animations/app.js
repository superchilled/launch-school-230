$(function() {
  var $canvas = $('#canvas');
  // var shapes = [];

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
    // shapes.push(shape);
    $canvas.append(shape);

    // console.log(shapes);
  });

  function resetElement($e, data) {
    // $e.css({
    //   left: +data.startx,
    //   top: +data.starty
    // });

    $e.css({
      'top': $e.attr('data-starty'),
      'left': $e.attr('data-startx')
    });
  }

  $('#animate').on('click', function(event) {
    event.preventDefault();

    $('.shape').stop();
    $('.shape').each(function() {
      var $elem = $(this);
      var data = $elem.data();

      // $elem.css({
      //   'top': $(this).attr('data-starty'),
      //   'left': $(this).attr('data-startx')
      // });
      resetElement($elem, data);
      $elem.animate({
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
