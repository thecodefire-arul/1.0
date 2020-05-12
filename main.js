/*var elem = document.getElementById('navbar');
var menu = document.getElementById('menu');

function display(){
    elem.style.transition = "all 1s";
    elem.style.marginRight = "0";
    menu.style.display = "none";
}

function hide(){
    elem.style.transition = "all 1s";
    elem.style.marginRight = "-20%";
    menu.style.display = "block";
}*/


$(document).ready(function(){
    $("#menu").click(function(){
      $("#navbar").show(1000);
      $("#menu").hide(1000);
    });
  });


$(document).ready(function(){
  $("#link").click(function(){
    $("#navbar").hide(1000);
    $("#menu").show(1000);
  });
});