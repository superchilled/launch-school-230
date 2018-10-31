$(function() {
  var photoData;
  var $slideShow = $('#slides');
  var $slides = $('#slides > figure');
  var $photoInfo = $('section > header');
  var $photoComments = $('#comments > ul');
  var $photosTemplate = $('#photos').remove();
  var $photoInformationTemplate = $('#photo_information').remove();
  var $photoCommentsTemplate = $('#comments-template').remove();
  var $photoCommentTemplate = $('#comment-template').remove();
  var photosTemplateFunc = Handlebars.compile($photosTemplate.html());
  var photoInformationTemplateFunc = Handlebars.compile($photoInformationTemplate.html());
  var photoCommentsTemplate = Handlebars.compile($photoCommentsTemplate.html());
  var photoCommentTemplate = Handlebars.compile($photoCommentTemplate.html());
  Handlebars.registerPartial('comment', photoCommentTemplate);

  $.ajax({
    url: '/photos',
    type: "GET",
    dataType : "json",
  }).done(function(json) {
      photoData = json;
      $slideShow.append(photosTemplateFunc({ photos: photoData }));
      updatePhotoInfo(1);
      updateComments(photoData[0].id);
  });

  $('.next').on('click', function(event) {
    event.preventDefault();
    var $currentSlide = $($('#slides > figure').first());
    var $nextSlide = $currentSlide.next('figure');
    var nextSlideId = Number($nextSlide.attr('data-id'));
    $currentSlide.fadeOut(500);
    $nextSlide.fadeIn(500);
    $slideShow.append($currentSlide);
    updatePhotoInfo(nextSlideId);
    updateComments(nextSlideId);
  });

  $('.prev').on('click', function(event) {
    event.preventDefault();
    var $currentSlide = $($('#slides > figure').first());
    var $lastSlide = $($('#slides > figure').last());
    var lastSlideId = Number($lastSlide.attr('data-id'));
    $currentSlide.fadeOut(500);
    $lastSlide.fadeIn(500);
    $slideShow.prepend($lastSlide);
    updatePhotoInfo(lastSlideId);
    updateComments(lastSlideId);
  });

  function updatePhotoInfo(slideId) {
    slideData = photoData.filter(function functionName(slide) {
      return slide.id === slideId;
    });
    $photoInfo.html(photoInformationTemplateFunc(slideData[0]));
  };

  function updateComments(slideId) {
    $.ajax({
      url: '/comments?photo_id=' + slideId,
      type: "GET",
      dataType : "json",
    }).done(function(commentJson) {
      $photoComments.html(photoCommentsTemplate({ comments: commentJson }));
    });
  };
});
