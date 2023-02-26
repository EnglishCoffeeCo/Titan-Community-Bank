// this program processes user entries and compares them to saved data in JSON to allow the user to:
// A. login and proceed to "accounts.html"
// B. press the reset password button on the form


"use strict"; // uses strict mode
let $ = function (id) {return document.getElementById(id);} // allows get elementbyID

// function processes user input for login
let login = function ()
{
  let isValid = true;
  let email = $("email2").value;
  let password = $("password2").value;
  let userRegistration = JSON.parse(localStorage.getItem(email));

  // compares inputted user login to the stored data in JSON
  if (userRegistration === null)
  {
    isValid = false;
    alert("You're not registered.");
    return false
  }

  else
  {
    if (email.toLowerCase() != userRegistration.email.toLowerCase())
    {
      isValid = false;
      alert("Incorrect login credentials");
      $("email2").nextElementSibling.firstChild.nodeValue = "Incorrect email";
      return false
    }

    // compares inputted user password to stored password in JSON
    else if (password != userRegistration.password)
    {
      isValid = false;
      alert("Incorrect login credentials");
      $("password2").nextElementSibling.firstChild.nodeValue = "Incorrect password";
      return false
    }

    // if, IsValid, display "success" alert, and forwards user to accounts.html
    else if (isValid)
    {
      localStorage.setItem("login", email);
      alert("success!");
      document.getElementById('spending_navLink').style.display = 'list-item';
      document.getElementById('accounts_navLink').style.display = 'list-item';

      return true
    }
    else
    {
      $("email2").nextElementSibling.firstChild.nodeValue = "";
      $("password2").nextElementSibling.firstChild.nodeValue = "";
    }
  }
};


// resets form
let resetForm = function ()
{
  $("login_form").reset();
}

// calls reset password function, href link to reset page is attached to CSS button
let resetPassword = function()
{
  $("reset_password").onclick = resetPassword;
}

// calls functions onclick
window.onload = function ()
{
  $("register").onclick = login;
  $("login_form").onclick = resetForm;
  document.getElementById('spending_navLink').style.display = 'none';
  document.getElementById('accounts_navLink').style.display = 'none';

}
