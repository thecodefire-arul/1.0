//Progress Bar

window.onscroll = function() {progressBar()};

function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

//Navbar

$(document).ready(function(){
    $("#menu").click(function(){
      $("#navbar").show(1000);
      $("#menu").hide(1000);
      $("#chat").hide(1000);
      $("#blur").show();
      //Stop Scroll
      $('html body').css('overflow','hidden');
    });
  });


$(document).ready(function(){
  $("#button").click(function(){
    $("#navbar").hide(1000);
    $("#menu").show(1000);
    $("#chat").show(1000);
    $("#blur").hide();
      // ScrollOn
      $('html body').css('overflow','scroll');
  });
});

//Modal Box

$(document).ready(function(){
  function showWindow(){
      $('#modal-box').show();
      //Auto Hide
      setTimeout(hideWindow,10000);

  }

  function hideWindow(){
      $('#modal-box').hide();
  }

  setTimeout(showWindow,5000);
})