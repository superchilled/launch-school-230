$(function() {
  function transition(newThumb) {
    $currentThumb.removeClass('active');
    $currentThumb = newThumb;
    $currentThumb.addClass('active');
    var newSrc  = $currentThumb.find('img').attr('src');
    var newCaption  = $currentThumb.find('img').attr('title');
    $mainImage.fadeOut(250, function() {
      $mainImage.attr('src', newSrc);
      $mainCaption.text(newCaption);
      $mainImage.fadeIn(250);
    });
  };

  var $mainImage = $('figure > img');
  var $mainCaption = $('figure > figcaption');
  var $thumbs = $('li');
  var $firstThumb = $thumbs.first();
  var $lastThumb = $thumbs.last();
  var $currentThumb = $('.active');
  var $nextThumb;
  var $backArrow = "<a href='#' class='arrow back'>&laquo;&laquo;</a>";
  var $forwardArrow = "<a href='#' class='arrow forward'>&raquo;&raquo;</a>";

  $($backArrow).insertBefore($mainImage);
  $($forwardArrow).insertAfter($mainImage);
  $mainCaption.text($currentThumb.find('img').attr('title'));

  $('li').on('click', function(event) {
    transition($(this));
  });

  $('.forward').on('click', function(event) {
    if ($currentThumb.is($lastThumb)) {
      $nextThumb = $firstThumb;
    } else {
      $nextThumb = $currentThumb.next();
    }
    transition($nextThumb);
  });
  $('.back').on('click', function(event) {
    if ($currentThumb.is($firstThumb)) {
      $nextThumb = $lastThumb;
    } else {
      $nextThumb = $currentThumb.prev();
    }
    transition($nextThumb);
  });
});
