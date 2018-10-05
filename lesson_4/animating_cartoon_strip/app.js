$(function() {
  var $blinds = $("div[id^='blind']");

  function startAnimation() {
    (function hidenext(blinds){
      blinds.first().fadeOut(2000, function(){
          (blinds=blinds.slice(1)).length && hidenext(blinds);
      });
    })($blinds);
  };

  $('a').on('click', function(event) {
    event.preventDefault();
    $blinds.finish().show(); // finish() is needed here to prevent two sets of
                             // animations running simultaneously 
    startAnimation()
  });

  startAnimation()
});
