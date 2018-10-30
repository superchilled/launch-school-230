var posts = [
  {
    title: 'Lorem ipsum dolor sit amet',
    published: 'April 1, 2015',
    body: '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>',
    tags: ['dolor', 'sit', 'amet'],
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    published: 'May 5, 2015',
    body: '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>',
    tags: ['dolor', 'sit', 'amet'],
  },
]

$(function() {
  var $template = $('#post').remove();
  var $tagsTemplate = $('#tags').remove();
  var templateFunction = Handlebars.compile($template.html());
  var tagsTemplateFunction = Handlebars.compile($tagsTemplate.html());
  Handlebars.registerPartial('tagsTemplate', tagsTemplateFunction);
  $('body').append(templateFunction(posts));
});
