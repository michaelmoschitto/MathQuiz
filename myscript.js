$(document).ready(function() {
  $("#Button").click(function() {
    $("#img1").animate({
      left: '+=100px',
      // opacity: '1.0',
      left: '+=100px'
    });
    $("p").css("color", "pink");
    // $("#a1").hide();

  });
});
