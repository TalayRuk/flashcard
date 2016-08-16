// $(document).ready(function() {
//   var phrases = ['clickable1', 'clickable2', 'clickable3', 'clickable4', 'clickable5', 'clickable6'];
//   phrases.forEach(function(phrase){
//     $("." + phrase).click(function() {
//       $("." + phrase + ' p').toggle();
// // ***another way us to replace ('.' + phrase + ' p')
// // with (this).children(p).toggle();
// // ** needed space in front of p b/c w/o loop
// // have to write it like;
// // (".clickable1 p").toggle(); for each clickable
//     });
//   });
//
// });

$(function(){
  //This is for the array
  var phrases = [];
  for (var i = 1; i < 7 ; i++) {
    phrases.push("clickable"+i);
  }

  //This is for writing the paragraphs to repeat over & over with same contents
  for (var n =1; n < 7 ;  n++) {
    $(".clickable").append('<div class="clickable'+n+'"><h3>Operator '+ n +'</h3><p>Operators is blah blah blah</p></div>');
  }

  //to make the phrases' click & show p
  for (var a =1; a < 7; a++) {
    $(".clickable"+a+ " h3").click(function() {
      $(this).siblings('p').toggle();


    });
  }

});
