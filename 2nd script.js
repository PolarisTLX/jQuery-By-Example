//hide / show

$(function() {
  $("#hide").click(function() {
    $('h3').hide();
  });
  $("#show").click(function() {
    $('h3').show();
  });
})



//SLIDE up and down
/*
$(function() {
  var clicked = false;
  $("#slide").click(function() {
    if (!clicked) {
      $("h4").slideDown();
      clicked = true;
    } else {
      $("h4").slideUp();
      clicked = false;
    }
  })
});
*/

//easier built in way to do both up and down:
//slideToggle
$(function() {
  $("#slide").click(function() {
    $("h4").slideToggle();
  });
});
//slide FAST
$(function() {
  $("#slideFast").click(function() {
    $("h4").slideToggle('fast');
  });
});


//FADE
//fadeIn / fadeOut / fadeToggle
$(function() {
  $("#fade").click(function() {
    $("h4").fadeToggle();
  });
});


//ANIMATE
$(function() {
  $("#animate").click(function() {
    $("div").animate({bottom: '150px'});
  });
});

//PREPEND  &  APPEND
$(function() {
  $('#prepend').click(function() {
    $("h5").prepend("words added at begining ");
  });
  $('#append').click(function() {
    $("h5").append(" words added at the end");
  });
})


//CSS in jQuery
$(function() {
  $("#addcss").click(function() {
    // $("h1").css("background-color","blue");
    // $("h1").css("color","red");
    // $("h1").css("font-size","130%");
    //to add multiple at the same time:
    //need {} and ends and  :  in between
    $("h1").css({"background-color":"blue","color":"red", "font-size":"250%"});
  });
});

//CLASSES:  Add / Remove / Toggle
$(function() {
  // $("#addClass").click(function() {
  //   $("h6").addClass("aclass");
  // });
  $("#addClass").click(function() {
    $("h6").toggleClass("aclass");
  });
})
