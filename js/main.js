$(document).ready(function(){
    
    $("#featured").css("color", "#00b3cc");

    $("#featured").css("font-size", "225%");
    $("#game").css("font-size", "200%");
    $("#music").css("font-size", "200%");

    $("#featured").click(function() {
        $(".game-item").hide();
        $(".music-item").hide();
        $(".featured-item").fadeIn();

        $("#featured").css("color", "#00b3cc");
        $("#game").css("color", "black");
        $("#music").css("color", "black");

        $("#featured").css("font-size", "225%");
        $("#game").css("font-size", "200%");
        $("#music").css("font-size", "200%");
    });

    $("#game").click(function() {
        $(".featured-item").hide();
        $(".music-item").hide();
        $(".game-item").fadeIn();


        $("#featured").css("color", "black");
        $("#game").css("color", "#00b3cc");
        $("#music").css("color", "black");

        $("#featured").css("font-size", "200%");
        $("#game").css("font-size", "225%");
        $("#music").css("font-size", "200%");
    });

    $("#music").click(function() {
        $(".featured-item").hide();
        $(".game-item").hide();
        $(".music-item").fadeIn();

        $("#featured").css("color", "black");
        $("#game").css("color", "black");
        $("#music").css("color", "#00b3cc");

        $("#featured").css("font-size", "200%");
        $("#game").css("font-size", "200%");
        $("#music").css("font-size", "225%");
    });
});