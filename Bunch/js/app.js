// Start jquery Section
$(document).ready(function () {
  // Start Header Section
  // Start nav bar
  $(".navbuttons").click("click", function () {
    $(this).toggleClass("crossxs");
  });

  let navlink = document.querySelectorAll(".nav-link");
  // console.log(navlink);

  for (var x = 0; x < navlink.length; x++) {
    navlink[x].addEventListener("click", function () {
      for (var y = 0; y < navlink.length; y++) {
        navlink[y].classList.remove("actives");
      }

      this.classList.add("actives");
    });
  }
  // End nav bar
  // End Header Section

  // Start Our Story Section
  $(window).scroll(function () {
    let scrolltop = $(this).scrollTop();
    // console.log(scrolltop);

    if (scrolltop >= 375) {
      $(".storyimgs:nth-of-type(1)").addClass("leftanimation");
      $(".storyimgs:nth-of-type(2)").addClass("rightanimation");
    } else {
      $(".storyimgs:nth-of-type(1)").removeClass("leftanimation");
      $(".storyimgs:nth-of-type(2)").removeClass("rightanimation");
    }
  });
  // End Our Story Section

  // Start Reservation Section
  const inputs = document.querySelectorAll(".form-control");
  const reservebtn = document.getElementById("reserve-buttons");
  var reservedata = [];

  reservebtn.addEventListener("click", function () {
    inputs.forEach(function (input) {
      reservedata.push(input.value);

      input.value = "";
    });

    localStorage.setItem("reserve", JSON.stringify(reservedata));
  });
  // End Reservation Section

  // Start Best Menu Section
  var menulinks = document.querySelectorAll(".best-menulinks");
  var hidefoods = document.querySelectorAll(".hide-foods");

  menulinks.forEach(function (menulink) {
    menulink.addEventListener("click", function () {
      var filter = this.getAttribute("data-filter");

      // start hide food
      for (var x = 0; x < hidefoods.length; x++) {
        hidefoods[x].style.display = "none";
      }
      // end hide food

      // start remove class menu-active
      for (var y = 0; y < menulinks.length; y++) {
        menulinks[y].parentElement.classList.remove("menu-active");
      }
      // end remove class menu-active

      document.getElementById(`${filter}`).style.display = "block";
      document.getElementById(`${filter}`).classList.add("menuanimations");
      menulink.parentElement.classList.add("menu-active");
    });
  });
  // End Best Menu Section

  // Start Accordion Section
  let accordiontitles = document.querySelectorAll(".accordion-titles");

  accordiontitles.forEach(function (accordiontitle) {
    accordiontitle.addEventListener("click", function () {
      // console.log(this.nextElementSibling);
      this.classList.toggle("accordion-actives");

      let getfoodmenu = this.nextElementSibling;
      console.log(getfoodmenu.clientHeight);

      if (getfoodmenu.style.height) {
        getfoodmenu.style.height = null;
      } else {
        getfoodmenu.style.height = getfoodmenu.clientHeight + "%";
      }
    });
  });
  // End Accordion Section

  // Start Fast Food Section
  $("#fast-foods").lightSlider({
    item: 5,
    loop: true,
    auto: true,
    slideMove: 1,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 600,
    autoWidth: true,
  });

  // Start Breakfast Food Section
  $("#breakfast-foods").lightSlider({
    item: 5,
    loop: true,
    auto: true,
    slideMove: 1,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 600,
    autoWidth: true,
  });
  // End Breakfast Food Section

  // Start Dinner Section
  $("#dinners").lightSlider({
    item: 5,
    loop: true,
    auto: true,
    slideMove: 1,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 600,
    autoWidth: true,
  });
  // End Dinner Section

  // Start Cocktail & Juice Section
  $("#juice-cocktails").lightSlider({
    item: 5,
    loop: true,
    auto: true,
    slideMove: 1,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 600,
    autoWidth: true,
  });
  // End Cocktail & Juice Section

  var pfoodimages = document.querySelectorAll(".pfood-images");
  // console.log(foodimages);
  var modalimage = document.getElementById("modal-images");
  var modalid = document.getElementById("example-modals");
  var displayfood = document.getElementById("display-foods");

  pfoodimages.forEach(function (pfoodimage) {
    pfoodimage.addEventListener("click", function (e) {
      let getsrc = this.firstElementChild.getAttribute("src");
      let getalt = this.firstElementChild.getAttribute("alt");

      modalimage.src = getsrc;
      modalimage.alt = getalt;

      displayfood.textContent = getalt;

      modalid.style.display = "block";
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target.className === "btn-closes") {
      modalid.style.display = "none";
    } else if (e.target === modalid) {
      modalid.style.display = "none";
    }
  });
  // End Fast Food Section

  // Start Adv Section
  let video = document.getElementById("videos");
  let videoattr = video.getAttribute("data-video");
  let modalvideo = document.getElementById("modal-videos");
  let advvideo = document.getElementById("adv-videos");
  let advclose = document.getElementById("adv-close");

  video.addEventListener("click", function () {
    advvideo.setAttribute("src", videoattr + "?autoplay=1");
  });

  advclose.addEventListener("click", function () {
    advvideo.setAttribute("src", videoattr);
  });

  window.onclick = function (e) {
    if (e.target.id === "modal-videos") {
      advvideo.setAttribute("src", videoattr);
    }
  };
  // End Adv Section

  // Start Member Section
  let goldmember = document.querySelector("#gold-members");
  let silvermember = document.querySelector("#silver-members");
  let platimember = document.querySelector("#plati-members");

  window.onscroll = function () {
    let getscrolltop = document.documentElement.scrollTop;
    // console.log(getscrolltop);

    if (getscrolltop > 7300) {
      silvermember.classList.add("leftmemberanis");
      goldmember.classList.add("centermemberanis");
      platimember.classList.add("rightmemberanis");
    } else {
      silvermember.classList.remove("leftmemberanis");
      goldmember.classList.remove("centermemberanis");
      platimember.classList.remove("rightmemberanis");
    }
  };

  let goldmoney = document.querySelector("#gold-moneys");
  let silvermoney = document.querySelector("#silver-moneys");
  let platimoney = document.querySelector("#plati-moneys");

  let switchbtn = document.getElementById("switchs");

  let goldprices = Number(goldmoney.getAttribute("data-money"));
  let silverprices = Number(silvermoney.getAttribute("data-money"));
  let platiprices = Number(platimoney.getAttribute("data-money"));

  let numberofmonths = 12;

  switchbtn.addEventListener("click", function (e) {
    if (this.checked) {
      // console.log(true);
      silvermoney.textContent = silverprices * numberofmonths;
      goldmoney.textContent = goldprices * numberofmonths;
      platimoney.textContent = platiprices * numberofmonths;
    } else {
      silvermoney.textContent = "1000";
      goldmoney.textContent = "3000";
      platimoney.textContent = "5000";
    }
  });
  // End Member Selection

  // Start Footer Section
  let gettoday = new Date();
  let getyear = gettoday.getUTCFullYear();

  document.querySelector("#year").innerText = getyear;
  // End Footer  Section
});
// End jquery Section
