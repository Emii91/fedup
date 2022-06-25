const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const success = document.querySelector(".success");

function validateForm(event) {
    event.preventDefault();

    if(checkLength(fullName.value, 5) === true) {
        fullNameError.style.display = "none";
    }
    else {
        fullNameError.style.display = "block";
    }

    if(checkLength(subject.value, 5) === true) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }

    if(checkLength(message.value, 5) === true) {
      messageError.style.display = "none";
    }
    else {
      messageError.style.display = "block";
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }

    console.log("Relevant input");
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function submitForm(event) {

    event.preventDefault();
  
    form.reset();

  }


form.addEventListener("submit", submitForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}