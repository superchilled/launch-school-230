# Practice Problems: Handlebars Basics

## Question 1

Locate the template by ID and compile it to a template function. Render the post to the body element using the function.

### Solution

```
$(function() {
  var $template = $('#post').remove();
  var templateFunction = Handlebars.compile($template.html());
  $('body').append(templateFunction(post));
});
```

## Question 2

Change your `post` object's `body` property to contain HTML elements as part of the string. Modify your Handlebars template to allow HTML to be output unescaped.

### Solution

```
var post = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>'
};
```

```
<script id="post" type="text/x-handlebars">
  <article>
    <h1>{{title}}</h1>
    <p><time>Posted on {{published}}</time></p>
    {{{body}}}
  </article>
</script>
```

## Question 3

Add a property called `tags` on the `post` object that will be an array of strings to represent tags added to the blog post. Use the Handlebars `each` loop and path notation to output all tags for the post. For reference, specifically on path notation, check out the section "Handlebars Paths" of the website.

### Solution

```
<script id="post" type="text/x-handlebars">
  <article>
    <h1>{{title}}</h1>
    <p><time>Posted on {{published}}</time></p>
    <p>Tags:</p>
    <ul>
      {{#each tags}}
        <li>{{this}}</li>
      {{/each}}
    </ul>
    {{{body}}}
  </article>
</script>
```

## Question 4

Create a separate template for the HTML element that wraps each tag. Using the handlebars partial method, register the template as a partial using the name "tag" and replace the HTML for tags in the main template with a reference to the partial.

### Solution

```
$(function() {
  var $template = $('#post').remove();
  var $tagsTemplate = $('#tags').remove();
  var templateFunction = Handlebars.compile($template.html());
  var tagsTemplateFunction = Handlebars.compile($tagsTemplate.html());
  Handlebars.registerPartial('tagsTemplate', tagsTemplateFunction);
  $('body').append(templateFunction(post));
});
```

```
<script id="post" type="text/x-handlebars">
  <article>
    <h1>{{title}}</h1>
    <p><time>Posted on {{published}}</time></p>
    <p>Tags:</p>
    <ul>
      {{> tagsTemplate}}
    </ul>
    {{{body}}}
  </article>
</script>
<script id="tags" type="text/x-handlebars">
  {{#each tags}}
    <li>{{this}}</li>
  {{/each}}
</script>
```

## Question 5

Create a `posts` array, adding the existing post to it. Add a second post with no tags property. Modify your template to check for the existence of tags, and if none exist, output a "Not tagged" message. Wrap the template in an each loop to output each post.

### Solution

```
$(function() {
  var $postTemplate = $('#post').remove();
  var $postsTemplate = $('#posts').remove();
  var $tagsTemplate = $('#tags').remove();
  var postTemplateFunction = Handlebars.compile($postTemplate.html());
  var postsTemplateFunction = Handlebars.compile($postsTemplate.html());
  var tagsTemplateFunction = Handlebars.compile($tagsTemplate.html());
  Handlebars.registerPartial('postTemplate', postTemplateFunction);
  Handlebars.registerPartial('tagsTemplate', tagsTemplateFunction);
  $('body').append(postsTemplateFunction({ posts: posts }));
});
```

```
<script id="post" type="text/x-handlebars">
    <article>
      <h1>{{title}}</h1>
      <p><time>Posted on {{published}}</time></p>
      <p>Tags:</p>
      {{#if tags}}
      <ul>
        {{> tagsTemplate}}
      </ul>
      {{else}}
        <p>Not tagged</p>
      {{/if}}
      {{{body}}}
    </article>
</script>
<script id="tags" type="text/x-handlebars">
  {{#each tags}}
    <li>{{this}}</li>
  {{/each}}
</script>
<script id="posts" type="text/x-handlebars">
  {{#each posts}}
    {{> postTemplate}}
  {{/each}}
</script>
```
