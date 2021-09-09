$(document).ready(function () {
    // Menu
    let isClickedMenu = false;
    $(".Menu").click(function () {
        if ($(this).find(".content").css({"display": "block"}) && !isClickedMenu) {
            $(this).find(".content").css({"display": "none"});
            isClickedMenu = true;
        } else {
            $(this).find(".content").css({"display": "block"});
            isClickedMenu = false;
        }
    });

    // Display  set layout
    $(".listBtn").click(function () {
        $("#list").removeClass("Grid").addClass("List");
    })

    $(".gridBtn").click(function () {
        $("#list").removeClass("List").addClass("Grid");
    })

    let isClickedHideList = false;
    // Hide List
    $(".hideList, .listTop .listBtn").click(function () {
        if ($(".listItems").css({"display": "block"}) && !isClickedHideList) {
            $(".listItems").css({"display": "none"});
            isClickedHideList = true;
        } else {
            $(".listItems").css({"display": "block"});
            isClickedHideList = false;
        }
    })
});