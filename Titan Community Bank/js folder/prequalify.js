// this program is used to determine if an applicant is prequalified for an auto loan

"use strict";
let $ = function (id) {return document.getElementById(id);}

let processEntries = function ()
{
  let isValid = true;
  let header = "";
  let html = "";
  let required = "<span>Required Field</span>";
  let msg = "Please review your entries and complete all required fields";
  let email = $("email").value;
  let verifyEmail = $("verify_email").value;
  let firstName = $("first_name").value;
  let lastName = $("last_name").value;
  let zipCode = $("zip").value;
  let grossIncome = $("gross_income").value;
  let ssn = $("ssn").value;
  let terms = $("terms").checked;


  if ((email === "") && (verifyEmail === ""))
  {
    isValid = false;
    email = required;
    verifyEmail = required;
    header = msg;
  }

  else if (email !== verifyEmail)
  {
    $("verify_email").nextElementSibling.firstChild.nodeValue = "This entry must equal the first entry";
    isValid = false;
    verifyEmail = required;
    header = msg;
  }

  else
  {
    $("email").nextElementSibling.firstChild.nodeValue = "";
  }

  if (firstName === "")
  {
    $("first_name").nextElementSibling.firstChild.nodeValue = "This field is required";
    isValid = false;
    firstName = required;
    header = msg;
  }

  else
  {
    $("first_name").nextElementSibling.firstChild.nodeValue = "";
  }

  if (lastName === "")
  {
    isValid = false;
    lastName = required;
    header = msg;
  }

  if (zipCode === "")
  {
    isValid = false;
    zipCode = required;
    header = msg;
  }

  if (ssn === "")
  {
    isValid = false;
    ssn = required;
    header = msg;
  }

  if (terms === false)
  {
    isValid = false;
    terms = required;
    header = msg;
  }

  if (grossIncome === "")
  {
    isValid = false;
    grossIncome = required;
    header = msg;
  }

  if (isValid)
  {
    if (grossIncome < 45000)
    {
      isValid = false;
      alert("We're sorry, you do not qualify for a loan at this time.")
    }
     else if (grossIncome >= 45000)
     {
      isValid = true;
      alert("Congratulations, Your are prequalified for a loan. A representative will contact you soon.")
    }
  }

  $("registration_header").firstChild.nodeValue = header;
  if (header === msg)
  {
    html = html + "<tr><td>Email:</td><td>" + email + "</td></tr>";
    html = html + "<tr><td>Verify Email:</td><td>" + verifyEmail + "</td></tr>";
    html = html + "<tr><td>First Name:</td><td>" + firstName + "</td></tr>";
    html = html + "<tr><td>Last Name:</td><td>" + lastName + "</td></tr>";
    html = html + "<tr><td>Zip Code:</td><td>" + zipCode + "</td></tr>";
    html = html + "<tr><td>Gross Income:</td><td>" + grossIncome + "</td></tr>";
    html = html + "<tr><td>SSN:</td><td>" + ssn + "</td></tr>";
    html = html + "<tr><td>Terms:</td><td>" + terms + "</td></tr>";
    $("registration_info").innerHTML = html;
  }

  else
  {
    $("registration_info").innerHTML = "";
    $("prequalify_form").submit();
  }
};

let resetForm = function ()
{
  $("prequalify_form").reset();
  $("registration_header").firstChild.nodeValue = "";
  $("registration_info").innerHTML = "";
}

window.onload = function ()
{
  $("apply").onclick = processEntries;
  $("reset_form").onclick = resetForm;
}
