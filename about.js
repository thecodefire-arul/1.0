$(document).ready(function(){
    $("#menu").click(function(){
      $("#navbar").show(1000);
      $("#menu").hide(1000);
      $("#blur").show();
      $("#local-navbar").hide();
      //Stop Scroll
      $('html body').css('overflow','hidden');
    });
  });


$(document).ready(function(){
  $("#button").click(function(){
    $("#navbar").hide(1000);
    $("#menu").show(1000);
    $("#blur").hide();
    $("#local-navbar").show();
    //Scroll On
    $('html body').css('overflow','scroll');
  });
});

//Local Navbar

window.addEventListener('DOMContentLoaded', (event) => {
    jQuery('#local-navbar').css("background-color", "rgba(255,255,255,0.1)");
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 0) {
            jQuery('#local-navbar').css("background-color", "rgba(255,255,255,0.8)");              
        } else {
            jQuery('#local-navbar').css("background-color", "rgba(255,255,255,0.1)");
        }
    });
});