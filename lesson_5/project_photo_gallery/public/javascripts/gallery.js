$(function() {
  var $slides = $('#slides');
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

  var photosResponse = $.ajax({
    url: '/photos',
    type: "GET",
    dataType : "json",
  }).done(function() {
      $slides.append(photosTemplateFunc({ photos: photosResponse.responseJSON }));
      $photoInfo.append(photoInformationTemplateFunc(photosResponse.responseJSON[0]));
      console.log(photosResponse.responseJSON[0].id);
      var firstPhotoComments = $.ajax({
        url: '/comments?photo_id=' + photosResponse.responseJSON[0].id,
        type: "GET",
        dataType : "json",
      }).done(function() {
        $photoComments.append(photoCommentsTemplate({ comments: firstPhotoComments.responseJSON }));
      });
  });
});
