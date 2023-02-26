// this program prompts the user to register for an account


"use strict"; // enables strict mode
let $ = function (id) {return document.getElementById(id);} // allows functions to get elements by ID

// function processes user entries
let processEntries = function ()
{
  let isValid = true;
  let header = "";
  let html = "";
  let email = $("email").value;
  let password = $("password").value;
  let verifyPassword = $("verify_password").value;
  let msg = "Please review your entries and complete all required fields";
  let required = "<span>Required Field</span>";
  let userRegistration = {};

  // validates email field is not blank, and sets inputted email value to lower case
  if (email.toLowerCase() === "")
  {
    isValid = false;
    $("email").nextElementSibling.firstChild.nodeValue = "This entry cannot be empty.";
    email = required;
    header = msg;
  }
  else
  {
    $("email").nextElementSibling.firstChild.nodeValue = "";
  }

  // validates password and confirm password fields are not empty
  if ((password === "") && (verifyPassword === ""))
  {
    password = required;
    verifyPassword = required;
    $("password").nextElementSibling.firstChild.nodeValue = "This entry cannot be empty.";
    $("verify_password").nextElementSibling.firstChild.nodeValue = "This entry cannot be empty.";
    isValid = false;
    header = msg;
  }

  // checks if password is the same as confirm password
  else if (password !== verifyPassword)
  {
    password = required;
    verifyPassword = required;
    $("verify_password").nextElementSibling.firstChild.nodeValue = "Both password entries must match.";
    isValid = false;
    header = msg;
  }
  else
  {
    $("password").nextElementSibling.firstChild.nodeValue = "";
    $("verify_password").nextElementSibling.firstChild.nodeValue = "";
  }

  // if header equal message, JS will display table with required data
  $("registration_header").firstChild.nodeValue = header;
  if (header === msg)
  {
    html = html + "<tr><td>Email:</td><td>" + email + "</td></tr>";
    html = html + "<tr><td>Password:</td><td>" + password + "</td></tr>";
    html = html + "<tr><td>Confirm Password:</td><td>" + verifyPassword + "</td></tr>";
    $("registration_info").innerHTML = html;
  }

  // if header doesn't equal message, table will not appear and the form will be allowed to submit
  else
  {
    $("registration_info").innerHTML = "";
    $("registration_form").submit();
  }

  // saves inputted user data in JSON object
  if (isValid)
  {
    userRegistration.email = email;
    userRegistration.password = password;
    localStorage.setItem(email, JSON.stringify(userRegistration));
    let test = JSON.stringify(userRegistration);
    // alert(test);
  }
};

// resets form and table
let resetForm = function ()
{
  $("registration_form").reset();
  $("registration_header").firstChild.nodeValue = "";
  $("registration_info").innerHTML = "";
}

// calls funtions via onclick method
window.onload = function ()
{
  $("register").onclick = processEntries;
  $("reset_form").onclick = resetForm;
}
