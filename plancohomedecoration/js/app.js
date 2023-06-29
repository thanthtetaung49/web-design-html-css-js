// Start Jquery
$(document).ready(function () {
  // Start Back to Top
  $(".btn-backtotops").hide();
  $(window).scroll(function () {
    let positiontop = $(this).scrollTop();
    // console.log(positiontop);

    if (positiontop >= 370) {
      $(".btn-backtotops").fadeIn(1000);
    } else {
      $(".btn-backtotops").fadeOut(1000);
    }
  });
  // End Back to Top

  // Start Header Section
  // Start nav
  $(".navbuttons").click("click", function () {
    $(".navbuttons").toggleClass("crossxs");
  });

  $(window).scroll(function () {
    let positiontop = $(this).scrollTop();
    // console.log(positiontop);

    if (positiontop >= 300) {
      $(".navbar").addClass("nav-menus");
    } else {
      $(".navbar").removeClass("nav-menus");
    }
  });
  // End nav
  // End Header Section

  // Start Properties
  $(".propertylists").click("click", function () {
    // for activeitems
    $(this).addClass("activeitems");
    $(this).siblings().removeClass("activeitems");

    // $(this).add("activeitems").siblings().removeClass("activeitems");

    // for filter
    let getattvalue = $(this).attr("data-filter");
    console.log(getattvalue);

    if (getattvalue === "all") {
      $(".filters").show("fade", 500);
    } else {
      $(".filters").hide();

      $(".filters")
        .not("." + getattvalue)
        .hide("fade", 500);

      $(".filters")
        .filter("." + getattvalue)
        .show("fade", 500);
    }
  });

  lightbox.option({
    showImageNumberLabel: false,
  });
  // End Properties

  // Start Adv Section

  $(window).scroll(function () {
    let top = $(this).scrollTop();

    console.log(top);

    if (top >= 1200) {
      $(".adv-images").addClass("fromlefts");
      $(".adv-texts").addClass("fromrights");
    } else {
      $(".adv-images").removeClass("fromlefts");
      $(".adv-texts").removeClass("fromrights");
    }
  });
  // End Adv Section

  // Start Footer Section

  let today = new Date();

  let getfullyear = today.getUTCFullYear();

  $("#getyear").text(getfullyear);

  // End Footer Section
});
// End Jquery
