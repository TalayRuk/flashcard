$(function() {
  for (var n = 1; n < 7; n ++) {
    $(".clickable").append("<div class ='clickable"+n+"'> <h3>Operator"+n+"</h3> <p>Operator is Awesome</p></div>");
  }

  for (var d = 1; d < 7; d ++) {
    $(".clickable"+d + " <h3>").click(function() {
      $(this).siblings('p').toggle();

    });
  }
});
