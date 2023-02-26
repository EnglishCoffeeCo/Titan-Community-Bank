// this program shows the user's spending habits in a bar chart

"use strict"; // enables strict mode
let $ = function (id) {return document.getElementById(id);}

  const ctx = document.getElementById('spendingChart').getContext("2d");
  let spendingChart = null

  const labels =
    [
    'Food and Dining, Spending:',
    'Auto and Transport, Spending:',
    'Shopping, Spending:',
    'Bills and Utilities, Spending:',
    'Mortgage, Spending:',
    'Entertainment, Spending:'
  ];

  const info =
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

  const config =
    {
    type: 'bar',
    data: info,
    options:
      {
        responsive: true,
        y:
          {
            easing: 'easeInOutElastic',
            from: (ctx) => {
              if (ctx.type === 'data') {
                if (ctx.mode === 'default' && !ctx.dropped) {
                  ctx.dropped = true;
                  return 0;
                }
              }
            },
            ticks:
              {
                callback: function (value) {
                  return "$" + value;
                },
              },
          },
      },
    };


  let userRegistration = JSON.parse(localStorage.getItem(localStorage.getItem("login")));

  if (userRegistration != null)
  {
    spendingChart = new Chart(ctx, config);
  }

  else
  {
    alert("You are not signed in, you will not be able to view the chart");
  };

let resetForm = function ()
{
  spendingChart.data.datasets.pop();
  spendingChart.update();
};

window.onload = function ()
{
  $("chart").onclick = resetForm;
};
