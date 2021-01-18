let form = document.getElementById("sign");
     firstname = document.getElementById("firstname");
     lastname = document.getElementById("lastname");
     othername = document.getElementById("othername");
     phonenumber = document.getElementById("phonenumber");
     mail  = document.getElementsByClassName("mail");
     password = document.getElementById("password");
     password2 = document.getElementById("password2");
     agree = document.getElementById("agree");

function required (field, event) {
    if (field.value === '') {
        field.nextElementSibling.innerHTML = 'This field is required'
        event.preventDefault();
        console.log(field)
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}
function forms(e) {
    console.log(e)
    required (firstname, e);
    required (lastname, e);
    required (phonenumber, e);
    required (mail, e);
    required (password, e);
    required (password2, e);
    required (agree, e);
    return true
}
form.addEventListener("submit", forms);
