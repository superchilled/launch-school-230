$(function() {
  var $blinds = $("div[id^='blind']");
  (function hidenext(blinds){
    blinds.first().fadeOut(2000, function(){
        (blinds=blinds.slice(1)).length && hidenext(blinds);
    });
  })($blinds);
});
