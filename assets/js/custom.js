function validateForm() {

  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  var name = document.forms["submissions"]["name"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  var email = document.forms["submissions"]["_replyto"].value;
  if (email == "") {
    alert("Email must be filled out");
    return false;
  } else if (!email.match(mailFormat)) {
  	alert("Email must be valid");
    return false;
  }

  var message = document.forms["submissions"]["message"].value;
  if (message == "") {
    alert("Message must be filled out");
    return false;
  }
}