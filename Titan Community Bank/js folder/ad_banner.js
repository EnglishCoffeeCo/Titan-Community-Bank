// This program automates the ad banner to scroll through each image every 4 seconds


// defines starting bannerStatus and the BannerTimer
let bannerStatus = 1;
let bannerTimer = 4000;

  // When site loads, call BannerLoop to initiate the first interval
    window.onload = function ()
  {
    bannerLoop();
  }

  // After first interval, continues to call BannerLoop every 4 seconds
    let startBannerLoop = setInterval(function()
  {
    bannerLoop();
    console.log(startBannerLoop + ' Boom'); // test case, appears in web inspector console
  }, bannerTimer);

  // First BannerLoop interval
  function bannerLoop()
  {
    if (bannerStatus === 1)
    {
      document.getElementById("imgban2").style.opacity = "0";

      setTimeout(function()
      {
        document.getElementById("imgban1").style.right = "0px";
        document.getElementById("imgban1").style.zIndex = "1000";
        document.getElementById("imgban2").style.right = "-1200px";
        document.getElementById("imgban2").style.zIndex = "1500";
        document.getElementById("imgban3").style.right = "1200px";
        document.getElementById("imgban3").style.zIndex = "500";
      }, 500);

      setTimeout(function()
      {
        document.getElementById("imgban2").style.opacity = "1";
      }, 1000);

      bannerStatus = 2; // sets bannerStatus to 2 for the next interval call
    }

    else if (bannerStatus === 2)
    {
      document.getElementById("imgban3").style.opacity = "0";

      setTimeout(function()
      {
        document.getElementById("imgban2").style.right = "0px";
        document.getElementById("imgban2").style.zIndex = "1000";
        document.getElementById("imgban3").style.right = "-1200px";
        document.getElementById("imgban3").style.zIndex = "1500";
        document.getElementById("imgban1").style.right = "1200px";
        document.getElementById("imgban1").style.zIndex = "500";
      }, 500);

      setTimeout(function()
      {
        document.getElementById("imgban3").style.opacity = "1";
      }, 1000);

      bannerStatus = 3; // sets bannerStatus to 3 for the next interval call
    }

    else if (bannerStatus === 3)
    {
      document.getElementById("imgban1").style.opacity = "0";

      setTimeout(function()
      {
        document.getElementById("imgban3").style.right = "0px";
        document.getElementById("imgban3").style.zIndex = "1000";
        document.getElementById("imgban1").style.right = "-1200px";
        document.getElementById("imgban1").style.zIndex = "1500";
        document.getElementById("imgban2").style.right = "1200px";
        document.getElementById("imgban2").style.zIndex = "500";
      }, 500);
      setTimeout(function()
      {
        document.getElementById("imgban1").style.opacity = "1";
      }, 1000);

      bannerStatus = 1; // sets bannerStatus back to 1 to restart
    }
  }
