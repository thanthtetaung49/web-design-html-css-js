// Start JQuery Area
$(document).ready(function () {
  // Start Header
  // Start Nav Bar
  $(".navbuttons").click("click", function () {
    $(this).toggleClass("crossxs");
  });
  // End Nav Bar
  // End Header

  // Start Login Box
  $("#open-btn").click(function () {
    $(".form-popup").css({
      display: "block",
    });
  });

  $("#formclose-btn").click(function () {
    $(".form-popup").css({
      display: "none",
    });
  });
  // End Login Box
});

// End JQuery Area

// Start JavaScript Area
// Start Students Counter Section
var getcountervalues = document.querySelectorAll(".countervalues");
// console.log(getcountervalues);

getcountervalues.forEach(function (getcountervalue) {
  getcountervalue.textContent = 0;

  // console.log(getcountervalue);

  const updatecounter = function () {
    // console.log("i am working");

    const countertarget = +getcountervalue.getAttribute("data-target");
    // console.log(typeof countertarget, countertarget);

    const getctcontent = +getcountervalue.innerText;
    // console.log(typeof getctcontent, getctcontent);

    const increasenumber = countertarget / 100;
    // console.log(increasenumber);

    if (getctcontent < countertarget) {
      getcountervalue.innerText = increasenumber + getctcontent;

      setTimeout(updatecounter, 100);
    }
  };

  updatecounter();
});
// End Students Counter Section

// Start Rating Section
// Start google code for chart
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Myanmar", 8],
    ["Thailand", 2],
    ["Signpore", 4],
    ["Indonesia", 2],
    ["Sirilanka", 8],
  ]);

  var options = {
    title: "International Students",
    // is3D: true,
    // peHole: 0.4,
    width: 500,
    height: 400,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}

// End google code for chart
// End Rating Section

const getyear = document.getElementById("getyear");
const getfullyear = new Date().getUTCFullYear();

getyear.textContent = getfullyear;

// End JavaScript Area

// 25CT

// setTimeout => initial 200 + 200 + 200
// setInterval => initial 200 + 200 + 400
