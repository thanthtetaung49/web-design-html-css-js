$(document).ready(function () {

    // Start Header Section 
    // Start navbar 
    $(".navbarbuttons").click("click", function() {

        $(".navbarbuttons").toggleClass("crossxs");
    })
    // End navbar 
    // End Header Section

    
    // Start Footer Section 
    let today = new Date();
    
    let thisYear = today.getFullYear();

    $("#year").text(`${thisYear}`);
    // End Footer Section

    // Start Tooltip Parts

    $("body").tooltip();

    // End Tooltip Parts 
    
});