// this program shows the user's spending habits in a bar chart

"use strict"; // enables strict mode
let $ = function (id) {return document.getElementById(id);}

  const ctx = document.getElementById('spendingChart').getContext("2d");

  const labels =
    [
    'Food and Dining, Spending:',
    'Auto and Transport, Spending:',
    'Shopping, Spending:',
    'Bills and Utilities, Spending:',
    'Mortgage, Spending:',
    'Entertainment, Spending:'
  ];

  let info =
    {
    labels,
    datasets:
      [
      {
      data: [2005.00,1471.31,892.86,531.60,1646.00,179.52],
      backgroundColor: ["rgba(255, 159, 64, 0.7)",
                        "rgba(255, 99, 132, 0.7)",
                        "rgba(54, 162, 235, 0.7)",
                        "rgba(75, 192, 192, 0.7)",
                        "rgba(153, 102, 255, 0.7)",
      ],
        label: "Spending Graph",
        fill: true,
    }]
  }

  let config =
    {
    type: 'bar',
    data: info,
    options:
      {
      responsive: true,
      y:
        {
        ticks:
          {
          callback: function(value){
            return "$" + value;
          },
        },
      },
    },
  };

  let userRegistration = JSON.parse(localStorage.getItem(localStorage.getItem("login")));

  if (userRegistration != null)
  {
    const spendingChart = new Chart(ctx, config);
  }

  else
  {
    alert("You are not signed in, you will not be able to view the chart");
  };

let resetForm = function ()
{
  let i;
  for (i in info.datasets.data)
  {
    i = 0;
  }
  $("spendingChart").reset()
};

window.onload = function ()
{
  $("spendingChart").onclick = resetForm;
};
