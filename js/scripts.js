$(document).ready(function() {
  var phrases = ['clickable1', 'clickable2', 'clickable3', 'clickable4', 'clickable5', 'clickable6'];
  phrases.forEach(function(phrase){
    $("." + phrase).click(function() {
      $("." + phrase + ' p').toggle();
// ***another way us to replace ('.' + phrase + ' p')
// with (this).children(p).toggle();
// ** needed space in front of p b/c w/o loop
// have to write it like;
// (".clickable1 p").toggle(); for each clickable
    });
  });

});
