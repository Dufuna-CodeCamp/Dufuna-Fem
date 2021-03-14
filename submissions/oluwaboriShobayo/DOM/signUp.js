let form = document.getElementById("sign");
     firstname = document.getElementById("firstname");
     lastname = document.getElementById("lastname");
     othername = document.getElementById("othername");
     phonenumber = document.getElementById("phonenumber");
     mail  = document.getElementById("mail");
     password = document.getElementById("password");
     password2 = document.getElementById("password2");
     nameRegex = /^[A-Za-z]+$/;
     numRegex = /^\+?\d*$/;
     emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
     pwdRegex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/; 

function emptyField (fieldName, Regex, errorMessage1, errorMessage2, event) {
  if (fieldName.value == '') {
      fieldName.nextElementSibling.innerHTML = errorMessage1;
      event.preventDefault()
      return false
  } if (!fieldName.value.match(Regex)) {
      fieldName.nextElementSibling.innerHTML = errorMessage2
      event.preventDefault();
      return false;
  } else {
      fieldName.nextElementSibling.innerHTML = "";
      return true;
  }
}
function forms(e) {
    emptyField(firstname, nameRegex, "Please enter your first name", "Special characters are not acceptable",e)
    emptyField(lastname, nameRegex, "Please enter your last name", "Special characters are not acceptable",e)
    emptyField(phonenumber, numRegex, "Please enter your phone Number", "Please enter a valid Number",e)
    emptyField(mail, emailRegex, "Please enter your email address", "Please enter a valid email",e)
    emptyField(password, pwdRegex, "Please enter your password", "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number",e)
    emptyField(password2, pwdRegex, "Please confirm your password", "Your passwords do not match",e)

}
form.addEventListener("submit", forms)


