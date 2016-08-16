$(function(){


    var phrases = ['clickable1', 'clickable2', 'clickable3', 'clickable4', 'clickable5', 'clickable6'];
    // console.log($("#clickable2").text());
    phrases.forEach(function(phrase){
      $("." + phrase).click(function() {
        // $(this).children().toggle();
        $(this).children().toggle();

      });

  //
  //   phrases.forEach(function(phrase){
  //    $("#" + phrase).show();
    // $("#" + phrase).toggle(); ...replace line 9 works
  //
  //
  //   });
  // // event.preventDefault();
  });

});
