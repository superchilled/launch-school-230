$(function() {
  $body = $('body');
  $siteHeader = $('header > nav').parent('header');
  $siteTitle = $('h1 > a').parent('h1');
  $article = $('article');
  $babyMopFig = $("figure > img[alt*='baby mop']").parent('figure');
  $chinStickFig = $("figure > img[alt*='chin stick']").parent('figure');
  $babyMopFigCaption = $("figcaption:contains('baby mop')");
  $chinStickFigCaption = $("figcaption:contains('chin stick')");
  $body.prepend($siteHeader.prepend($siteTitle));
  $article.append($chinStickFig.append($chinStickFigCaption));
  $article.append($babyMopFig.append($babyMopFigCaption));
});
