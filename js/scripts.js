$(function(){
//     $(".showing1").toggle();
//   });
//   $(".clickable2").click(function() {
//     $(".showing2").toggle();
//   });
//   $(".clickable3").click(function() {
//     $(".showing3").toggle();
//   });
//   $(".clickable4").click(function() {
//     $(".showing4").toggle();
//   });
//   $(".clickable5").click(function() {
//     $(".showing5").toggle();
//   });
//   $(".clickable6").click(function() {
//     $(".showing6").toggle();
//   });
// });

  $(".clickable").click(function() {
    var phrases = ['clickable1', 'clickable2', 'clickable3', 'clickable4', 'clickable5', 'clickable6'];

    phrases.forEach(function(phrase) {
     var show = $("." + phrase).click();
     $("#" + phrase).toggle(show);


     });
  });

});
