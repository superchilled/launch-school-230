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

  $.ajax({
    url: '/photos',
    type: "GET",
    dataType : "json",
  }).done(function(json) {
      $slides.append(photosTemplateFunc({ photos: json }));
      $photoInfo.append(photoInformationTemplateFunc(json[0]));

      $.ajax({
        url: '/comments?photo_id=' + json[0].id,
        type: "GET",
        dataType : "json",
      }).done(function(commentJson) {
        $photoComments.append(photoCommentsTemplate({ comments: commentJson }));
      });
  });
});
