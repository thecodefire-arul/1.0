//Navbar

$(document).ready(function(){
  $("#menu").click(function(){
    $("#navbar").show(1000);
    $("#menu").hide(1000);
  });
});

$(document).ready(function(){
  $("#button").click(function(){
    $("#navbar").hide(1000);
    $("#menu").show(1000);
  });
});