$(document).ready(function () {

    // Start Nav Bar
    $("#signupbtns").button().css({
        width : "100px",
        padding : "5px 10px",
        margin : "5px 0",
        borderRadius : "10px",
        color : "#fff",
        backgroundColor : "#631021",
        border : "1px solid red"
    });

    $(".navbuttons").click("click", function () {
        $(this).toggleClass("cross-xs");
    })
    // End Nav Bar

    // Start Introduction Online Selling/Buying
    $(window).scroll(function () {

        let position_top = $(this).scrollTop();
        console.log(position_top);

        if (position_top >= 100) {
            $(".our-auzora").addClass("auzoranis");
        } else {
            $(".our-auzora").removeClass("auzoranis");
        }

        if (position_top >= 500) {
            $(".brand-names").addClass("laptopbrandanis");
            $(".about-laptops").addClass("aboutlaptopanis");
        } else {
            $(".brand-names").removeClass("laptopbrandanis");
            $(".about-laptops").removeClass("aboutlaptopanis");
        }

        if (position_top >= 700) {
            $(".online-sellingimgs").addClass("imganimation");
            $(".onlineselling-texts").addClass("textanimation");
        } else {
            $(".online-sellingimgs").removeClass("imganimation");
            $(".onlineselling-texts").removeClass("textanimation");
        }
    })
    // End Introduction Online Selling/Buying

    // Start Game Item Section
    $(".propertylists").click("click", function () {
        $(this).addClass("active-items").siblings().removeClass("active-items");
    })

    $(".items").click("click", function () {

        let get_attr = $(this).attr("data-filter");

        console.log(get_attr);

        if (get_attr === "alls") {
            $(".myitems").show("slide", 500);
        } else {
            $(".myitems").hide();

            $(".myitems").not("." + get_attr).hide("slide", 500);

            $(".myitems").filter("." + get_attr).show("slide", 500);
        }

    })
    // End Game Item Section

    // Stat Laptop Section
    $(".propertylists").click("click", function () {
        $(this).addClass("mycolors").siblings().removeClass("mycolors");

        let attr_items = $(this).attr("data-filter");
        console.log(attr_items);

        if (attr_items === "alls") {
            $(".card").show("slide", 500)
        } else {
            $(".card").hide();

            $(".card").not("." + attr_items).hide("slide", 500);

            $(".card").filter("." + attr_items).show("slide", 500);
        }
    })
    // End Laptop Section

    // Start Location and Accordion Section
    $(".accordions").accordion();
    // End Location and Accordion Section

    // Start Member Sign Up Section
    $(window).scroll(function () {
        let position_top = $(this).scrollTop();
        console.log(position_top);

        if (position_top >= 6000) {
            $(".persons").addClass("leftanimations");
            $(".forms").addClass("rightanimations");
        } else {
            $(".persons").removeClass("leftanimations");
            $(".forms").removeClass("rightanimations");
        }
    })
    // End Member Sign Up Section
})