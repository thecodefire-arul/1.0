var elem = document.getElementById('navbar');
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
}