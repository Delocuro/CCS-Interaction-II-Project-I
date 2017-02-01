$(document).ready(function () {
    
    $(".switchBox").click(function () {
        $(this).children(".switch").toggleClass("on");
        $(this).children(".onText").toggleClass("invisible")
        $(".crumpleMap").toggleClass("invisible");
    });
    
});

$(function() {
    var slideWidth = $('.slideRoom').width();
    
    $(".slideButton").draggable({
        axis: "x",
        containment: "parent",
        drag: function(event, ui){
            if (ui.position.left == 0) {
                $(".photoStrip").css("margin-left", "0%");
            }
            if (ui.position.left >= 12.5) {
                $(".photoStrip").css("margin-left", "-100%");
            }
            if (ui.position.left >= 25) {
                $(".photoStrip").css("margin-left", "-200%");
            }
            if (ui.position.left >= 37.5) {
                $(".photoStrip").css("margin-left", "-300%");
            }
            if (ui.position.left >= 50) {
                $(".photoStrip").css("margin-left", "-400%");
            }
            if (ui.position.left >= 62.5) {
                $(".photoStrip").css("margin-left", "-500%");
            }
            if (ui.position.left >= 75) {
                $(".photoStrip").css("margin-left", "-600%");
            }
            if (ui.position.left >= 87.5) {
                $(".photoStrip").css("margin-left", "-700%");
            }
            if (ui.position.left >= 100) {
                $(".photoStrip").css("margin-left", "-800%");
            }
            if (ui.position.left >= 112.5) {
                $(".photoStrip").css("margin-left", "-900%");
            }
            if (ui.position.left >= 125) {
                $(".photoStrip").css("margin-left", "-1000%");
            }
            if (ui.position.left >= 137.5) {
                $(".photoStrip").css("margin-left", "-1100%");
            }
            if (ui.position.left >= 150) {
                $(".photoStrip").css("margin-left", "-1200%");
            }
            if (ui.position.left >= 162.5) {
                $(".photoStrip").css("margin-left", "-1300%");
            }
            if (ui.position.left >= 175) {
                $(".photoStrip").css("margin-left", "-1400%");
            }
            if (ui.position.left >= 187.5) {
                $(".photoStrip").css("margin-left", "-1500%");
            }
            if (ui.position.left >= 200) {
                $(".photoStrip").css("margin-left", "-1600%");
            }
            if (ui.position.left >= 212.5) {
                $(".photoStrip").css("margin-left", "-1700%");
            }
            if (ui.position.left >= 225) {
                $(".photoStrip").css("margin-left", "-1800%");
            }
            if (ui.position.left >= 237.5) {
                $(".photoStrip").css("margin-left", "-1900%");
            }
            if (ui.position.left >= 250) {
                $(".photoStrip").css("margin-left", "-2000%");
            }
            if (ui.position.left >= 262.5) {
                $(".photoStrip").css("margin-left", "-2100%");
            }
            if (ui.position.left >= 275) {
                $(".photoStrip").css("margin-left", "-2200%");
            }
            if (ui.position.left >= 287.5) {
                $(".photoStrip").css("margin-left", "-2300%");
            }
            if (ui.position.left >= 300) {
                $(".photoStrip").css("margin-left", "-2400%");
            }
        }
    });
});