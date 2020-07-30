$(document).ready(function(){
  var initialWidth = 0;
  var initialDisplay = "";
  $('#togglebutton').click(function() {
      if($(window).width() >= 768) {
        initialWidth = $(".menu").width();
        initialDisplay = $(".menu .text").css("display");
        if(initialWidth > 50) {
          initialWidth = 50;
          initialDisplay = "none";
          $("#toggleMenu").addClass("menu-toggle");
        }
        else {
          initialWidth = "100%";
          initialDisplay = "inline";
          $("#toggleMenu").removeClass("menu-toggle");
        }
        $("#toggleMenu").width(initialWidth);
        $(".menu .text").css({display: initialDisplay});
      }
  });
});