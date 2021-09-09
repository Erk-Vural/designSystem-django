$(document).ready(function () {
    // Menu
    $(".menuBtn").click(function () {
        alert("The paragraph was clicked.");
    });

    // Display  set layout
    $(".listBtn").click(function () {
        $("#list").removeClass("Grid").addClass("List");
    })

    $(".gridBtn").click(function () {
        $("#list").removeClass("List").addClass("Grid");
    })

    // Hide List
});