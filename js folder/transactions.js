// this program saves and loads 5 credit/debit transactions in an array, displays the transactions, displays available
// balances (credit minus debit). Allows the user to withdraw and deposit an amount, display the balance and the transaction
// in the list of transactions

"use strict"; // uses strict mode
let $ = function (id) {return document.getElementById(id);} // allows get elementbyID


let data = [['01/30/2022', 'Pay Check', 'C', 15000.00], ['02/15/2022', 'Spring Vacation', 'D', 2000.00],
            ['02/30/2022', 'Pay Check', 'C', 14000.00], ['03/03/2022', 'AC service on home', 'D', 3000.00],
            ['03/30/2022', 'Pay Check', 'C', 15000.00], ['04/07/2022', 'Down payment on new car', 'D', 7000.00],
            ['04/30/2022', 'Pay Check', 'C', 15000.00], ['05/05/2022', 'turbocharger install for car', 'D', 3000.00],
            ['05/06/2022', 'Dyno-tuning for car', 'D', 200.00], ['05/30/2022', 'Pay Check', 'C', 15000.00]];

let balance = 0.00;
let transactions = [];

let transaction = function (date, description, type, amount)
{
  this.transactionDate = date;
  this.transactionDescription = description;
  this.transactionType = type;
  this.transactionAmount = amount;
}

for (let i = 0; i < data.length; i++)
{
  transactions[i] = new transaction(data[i][0], data[i][1], data[i][2], data[i][3])
}

let generateList = function ()
{
  balance = 0.00;

  let items = "<table><thead><th>Date</th><th>Type</th><th>Description</th><th>Amount</th></thead><tbody>";
  for (let i = 0; i < transactions.length; i++)
  {
    items += `<tr><td>${transactions[i].transactionDate}</td><td>${transactions[i].transactionType}</td>
    <td>${transactions[i].transactionDescription}</td>`;
    if (transactions[i].transactionType === 'C')
    {
      balance = balance + transactions[i].transactionAmount;
      items += `<td>$${transactions[i].transactionAmount}</td></tr>`;
    }
    else
    {
      balance = balance - transactions[i].transactionAmount;
      items += `<td>-$${transactions[i].transactionAmount}</td></tr>`;
    }
  }
  items += `</tbody><tfoot><tr></tr><tr><td colspan="3">Balance</td><td>$${balance}</td></tr></tfoot>`
  items += "</table>";
  return items;
}

document.querySelector("main").innerHTML = `${generateList()}`;

let currentDate = function ()
{
  let today = new Date();
  let day = String(today.getDate()).padStart(2,'0');
  let month = String(today.getMonth() + 1).padStart(2,'0');
  let year = today.getFullYear();

  today = month + '/' + day + "/" + year;
  return today
}

let withdraw = function()
{
  let withdraw_amount = $("amount_textBox").value;
  if (withdraw_amount > 0)
  {
    let tran = new transaction(currentDate(), "withdraw", "D", withdraw_amount)
    transactions.push(tran);
    document.querySelector("main").innerHTML = `${generateList()}`;
  }
}

let deposit = function ()
{
  let deposit_amount = $("amount_textBox").value;
  if (deposit_amount > 0)
  {
    let tran = new transaction(currentDate(), "deposit", "C", deposit_amount)
    transactions.push(tran);
    document.querySelector("main").innerHTML = `${generateList()}`;
  }
}

// calls functions onclick
window.onload = function ()
{
  $("withdraw_button").onclick = withdraw;
  $("Deposit_button").onclick = deposit;
}
