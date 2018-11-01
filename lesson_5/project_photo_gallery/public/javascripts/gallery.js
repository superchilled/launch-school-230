$(function() {
  var photoData;
  var $slideShow = $('#slides');
  var $slides = $('#slides > figure');
  var $photoInfo = $('section > header');
  var $photoComments = $('#comments > ul');
  var $photosTemplate = $('#photos').remove();
  var $photoInformationTemplate = $('#photo_information').remove();
  var $likesTemplate = $('#likes_template').remove();
  var $favoritesTemplate = $('#favorites_template').remove();
  var $photoCommentsTemplate = $('#comments-template').remove();
  var $photoCommentTemplate = $('#comment-template').remove();
  var photosTemplateFunc = Handlebars.compile($photosTemplate.html());
  var photoInformationTemplateFunc = Handlebars.compile($photoInformationTemplate.html());
  var likesTemplateFunc = Handlebars.compile($likesTemplate.html());
  var favoritesTemplateFunc = Handlebars.compile($favoritesTemplate.html());
  var photoCommentsTemplateFunc = Handlebars.compile($photoCommentsTemplate.html());
  var photoCommentTemplateFunc = Handlebars.compile($photoCommentTemplate.html());
  Handlebars.registerPartial('comment', photoCommentTemplateFunc);
  Handlebars.registerPartial('likesPartial', likesTemplateFunc);
  Handlebars.registerPartial('favoritesPartial', favoritesTemplateFunc);

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

  $photoInfo.on('click', 'a', function(event) {
    event.preventDefault();
    var slideId = Number($(this).attr('data-id'));
    var buttonClass = getButtonClass($(this).attr('class'));

    $.ajax({
      url: '/photos/' + buttonClass,
      data: {photo_id: slideId},
      type: "POST",
      dataType : "json",
    }).done(function(json) {
      refreshCachedPhotoData();
      if (buttonClass === 'like') {
        $(event.target).text(likesTemplateFunc({likes: json.total}));
      } else if (buttonClass === 'favorite') {
        $(event.target).text(favoritesTemplateFunc({favorites: json.total}));
      }
    });
  });

  $('#comments form').on('submit', function(event) {
    event.preventDefault();
    var formData = $(this).serialize();

    $.ajax({
      url: '/comments/new',
      data: formData,
      type: 'POST',
    }).done(function(json) {
      $photoComments.append(photoCommentTemplateFunc(json));
      event.target.reset();
    });
  });

  function updatePhotoInfo(slideId) {
    slideData = photoData.filter(function functionName(slide) {
      return slide.id === slideId;
    });
    $photoInfo.html(photoInformationTemplateFunc(slideData[0]));
    $('input[name=photo_id]').val(slideId);
  };

  function updateComments(slideId) {
    $.ajax({
      url: '/comments?photo_id=' + slideId,
      type: "GET",
      dataType : "json",
    }).done(function(commentJson) {
      $photoComments.html(photoCommentsTemplateFunc({ comments: commentJson }));
    });
  };

  function refreshCachedPhotoData() {
    $.ajax({
      url: '/photos',
      type: "GET",
      dataType : "json",
    }).done(function(json) {
      photoData = json;
    });
  };

  function getButtonClass(className) {
    if (className.includes('like')) {
      return 'like';
    } else if (className.includes('favorite')) {
      return 'favorite'
    }
  };
});
