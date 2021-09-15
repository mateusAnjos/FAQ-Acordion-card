$(document).ready(function(){
    $(".collapseText").hide()

    $(".box").click(function(){
        $(this).find(".collapseText").toggle();
        $(this).find(".boxcontent").toggleClass("cardOpen")
    });


    
  });
