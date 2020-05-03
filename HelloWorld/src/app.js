$(document).ready(function(){
    $(window).on("scroll",function() {
        if($(this).scrollTop() > 450){
            $(".barrafissa").removeClass("statica").addClass("scroll");
        }else{
            $(".barrafissa").removeClass("scroll").addClass("statica");
          }
  })
})
