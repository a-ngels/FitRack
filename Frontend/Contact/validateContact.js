const contactForm = document.querySelector(".contact-form")
let first_name = document.getElementById("first-name");
let last_name = document.getElementById("last-name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let errors = document.querySelectorAll(".error");
let success = document.querySelector("#success");


// clear error classes and text
function clearError () {

   for (let i = 0; i < errors.length; i++) {
      errors[i].innerText = "";
   }
   success.innerText = "";
   first_name.classList.remove("error-border");
   last_name.classList.remove("error-border");
   email.classList.remove("error-border");
   message.classList.remove("error-border")
}

// check for valid email pattern
function validEmail (email) {
   let pattern = /\S+@\S+\.\S+/;
   return pattern.test(email);
}

// validate form
function validateForm () {

   // clear error function
   clearError ();
   hasError = false;

   // if first name is empty
   if (first_name.value.length < 1) {
      errors[0].innerText = "Enter first name";
      first_name.classList.add("error-border");
      hasError = true;
      return;
   }

   // if last name is empty 
   if (last_name.value.length < 1) {
      errors[1].innerText = "Enter Last name";
      last_name.classList.add("error-border");
      hasError = true;
      return;
   }

   // if email is valid
   if (!validEmail(email.value)) {
      errors[2].innerText = "Invalid email address";
      email.classList.add("error-border");
      hasError = true;
      return;
   }

   // if message is empty
   if (message.value.length < 1) {
      errors[3].innerText = "Enter message";
      message.classList.add("error-border");
      hasError = true;
      return;
   }

   // check if form has error
   if (!hasError) {
      success.innerText = "Message Sent Successfully";
      return true;
   }
}


contactForm.addEventListener("submit", (e) => {

   // prevent default behavior
   e.preventDefault();

   // if validateForm returns true, send email
   if (validateForm()) {
      
      let formInfo = {
         first_name: first_name.value,
         last_name: last_name.value,
         email: email.value,
         message: message.value
      }

      let xhr = new XMLHttpRequest();
      xhr.open('POST', '/');
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.onload =  function () {
         console.log(xhr.responseText);
         if (xhr.responseText == 'success') {
            alert('email sent');
            clearError();

         } else {
            alert ("Email could not be sent");
         }
      }

      xhr.send(JSON.stringify(formInfo));

   }
});