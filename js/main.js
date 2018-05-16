$(document).ready(function(){

    select($("#featured"));
    $(".featured-item").fadeIn();

    $("#featured").click(function() {
        select($("#featured"));
        $(".featured-item").fadeIn();
    });

    $("#game").click(function() {
        select($("#game"));
        $(".game-item").fadeIn();
    });

    $("#video").click(function() {
        select($("#video"));
        $(".video-item").fadeIn();
    });

    $("#music").click(function() {
        select($("#music"));
        $(".music-item").fadeIn();
    });
});

var select = function(e) {
    resetAll();
    
    $(e).css("font-size", "225%");
    $(e).css("color", "#00b3cc");

    $(".portfolio-item-wrapper").hide();
}

var reset = function(e) {
    $(e).css("font-size", "200%");
    $(e).css("color", "black");
}

var resetAll = function() {
    reset($("#featured"));
    reset($("#game"));
    reset($("#video"));
    reset($("#music"));
}