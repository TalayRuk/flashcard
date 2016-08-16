$(function(){
  $(".clickable").click(function(event) {

    var phrases = ['clickable1', 'clickable2', 'clickable3', 'clickable4', 'clickable5', 'clickable6'];
    console.log($(".clickable1").text());

    phrases.forEach(function(phrase){
     var show = $("." + phrase).text();
     alert(show);
     $("#" + phrase).toggle(show);


    });
  event.preventDefault();
  });

});
