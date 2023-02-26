// this program resets the users password, clears the old password from the JSON object, and adds the new password.


"use strict"; // uses strict mode
let $ = function (id) {return document.getElementById(id);} // allows getelementbyID

// reset password function
let resetPassword = function ()
{
  let isValid = true;
  let email = $("email").value;
  let password = $("password").value;
  let userRegistration = {};
  userRegistration = JSON.parse(localStorage.getItem("registration"));

  // validates email field is not blank, uses toLowerCase method to lowercase inputted email
  if (email.toLowerCase() === "")
  {
    isValid = false;
    $("email").nextElementSibling.firstChild.nodeValue = "Email field cannot be blank";
  }

  // validates lowercased email inputted by the user is equal to the one stored in JSON
  else if (email.toLowerCase() != userRegistration.email.toLowerCase())
  {
    $("email").nextElementSibling.firstChild.nodeValue = "Email does not match";
  }

  // validates password field is not empty
  else if (password === "")
  {
    isValid = false;
    $("password").nextElementSibling.firstChild.nodeValue = "Password field cannot be blank";
  }

  // clears entries in JSON object, adds the new email and password
  else
  {
    $("email").nextElementSibling.firstChild.nodeValue = "";
    $("password").nextElementSibling.firstChild.nodeValue = "";
    clearEntries();
    userRegistration.email = email;
    userRegistration.password = password;
    localStorage.setItem("registration", JSON.stringify(userRegistration));
  }
};

// clear JSON entries
let clearEntries = function()
{
  localStorage.setItem("registration", "");
}

// resets form
let resetForm = function ()
{
  $("reset_form").reset();
}

// calls functions onclick
window.onload = function ()
{
  $("register").onclick = resetPassword;
  $("reset_button").onclick = resetForm;
}
