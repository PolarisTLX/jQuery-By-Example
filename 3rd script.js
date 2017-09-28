//FORM INPUT

$(function() {
  $("form").submit(function() {
    alert('submitted');
  });
});


//TEXT VALIDATION

$(function() {
  $("#username").focusout(function() {
    //focusout means start typing in a text field and click out
    var username = $("#username").val().length;
    if (username < 8 || username > 15) {
      $("#usernameError").html("Username should be 8 to 15 characters");
      $("#usernameError").show();
    } else {
      $("#usernameError").hide();
    }
  });
  $("#password").focusout(function() {
    var password = $("#password").val().length;
    if (password < 8) {
      $("#passwordError").html("Password should be at least 8 characters");
      $("#passwordError").show();
    } else {
      $("#passwordError").hide();
    }
  });
  $("#retype").focusout(function() {
    var firstPassword = $("#password").val();
    var retype = $("#retype").val();
    if (retype !== firstPassword) {
      $("#retypeError").html("Passwords should match");
      $("#retypeError").show();
    } else {
      $("#retypeError").hide();
    }
  });
  $("#email").focusout(function() {
    var email = $("#email").val()

//really simple RegExp validation in the form of:
//anystring@anystring.anystring{2-4 characters}
//  /\S+@\S+\.[a-zA-Z]{2,4}$/

    var emailRegExp = new RegExp(/\S+@\S+\.[a-zA-Z]{2,4}$/);
    if (emailRegExp.test(email)) {
      $("#emailError").hide();
    } else {
      $("#emailError").html("Invalid Email");
      $("#emailError").show();
    }
  });
});
