(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function gatherKeyInfo(){

    x[0].innerHTML = "Hello World!";
};
function clickMembers(keyMemberNumber){
var x = document.getElementsByClassName("keyInfo");
    x[keyMemberNumber].style.visibility="visible";
};
function mouseOutMembers(keyMemberNumber){
var x = document.getElementsByClassName("keyInfo");
     x[keyMemberNumber].style.visibility="hidden";
};
