$(function() {
  $('#team li > a').on('click', function(event) {
    event.preventDefault();
    $currentListitem = $(this).parent('li');
    $modal = $currentListitem.find('.modal');
    $modalLayer = $currentListitem.find('.modal_layer');
    $closeLink = $currentListitem.find('.close');
    $modal.css('top', $(window).scrollTop() + 50).removeClass('hidden');
    $modalLayer.css('display', 'block');
    $modalLayer.on('click', function() {
      $modalLayer.off();
      $closeLink.off();
      $modal.addClass('hidden');
      $modalLayer.css('display', 'none');
    });
    $closeLink.on('click', function(event) {
      event.preventDefault();
      $modal.addClass('hidden');
      $modalLayer.css('display', 'none');
      $modalLayer.off();
      $closeLink.off();
    });
    $('body').keyup(function(event) {
      if(event.keyCode === 27) {
        $modal.addClass('hidden');
        $modalLayer.css('display', 'none');
        $modalLayer.off();
        $closeLink.off();
      }
    });
  });
});
