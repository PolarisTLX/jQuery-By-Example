/*
There are two ways to include jQuery in a project:
jQuery is a JavaScript file that you will link to in your HTML.

1. Download a local copy.
2. Link to a file via Content Delivery Network (CDN).


Option 2 is best, and involves including this line in the HTML:
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
*/


/*
 //jQuery is run when the document is ready
$(document).ready(function(){
  alert("Hello World");
});

//shorter method that also works:
$(function(){
  alert("Hello again");
});
*/


$(function(){
  $("h1").click(function(){
    alert("You just clicked on an h1 tag!");
  });
});
//DOUBLE-CLICK is dblclick
$(function(){
  $("h2").dblclick(function(){
    alert("You just DOUBLE-clicked on an h2 tag!");
  });
});

/*
//mousemove events:
$(function(){
  $("h3").mouseenter(function(){
    alert("You just hovered over an h3 tag!");
  });
});

$(function(){
  $("h4").mouseleave(function(){
    alert("You just moved your mouse off of this line!");
  });
});
*/



//keyboard inputs:
$(function(){
  $("#textbox").keypress(function(){
    alert('You just typed in this input field!');
  });
});

$(function(){
  $("#textbox2").keyup(function(){
    alert('You just released a key that you were pressing while in this box');
  });
});

//Get value, Text and HTML
//value
$(function() {
  $("#Get").click(function() {
    alert($("#info").val());
  });
});

//TEXT
$(function() {
  $('#Get2').click(function() {
    //to grab text in the h3
    alert($('h3').text());
    //to change text in the h3
    $('h3').text("text changed to what was chosen in script");
    //if there is more than 1 h3, all of them will be affected
  });
});

//HTML
$("#htmlButton").click(function() {
  $("h5").html('<font size="20px">Changed the font of this h5</font>');
});



 //List of jQuery SELECTORS
