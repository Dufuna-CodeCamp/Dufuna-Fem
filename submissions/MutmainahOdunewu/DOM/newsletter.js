let sendForm = document.getElementById("submit");
let mail = document.getElementById("newsletter");
let errorMessage = document.querySelector(".errormessage");

let valide = (event) => {
  const emailRegex = /([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/i;

  if (newsletter.value === "") {
    errorMessage.innerHTML = "Please enter  your email";
    event.preventDefault();
    return false;
  } else if (!newsletter.value.match(emailRegex)) {
    errorMessage.innerHTML = "Please enter a valid email";
    event.preventDefault();
    return false;
  } else {
    errorMessage.innerHTML = "";
    return true;
  }
};

sendForm.addEventListener("click", valide);
