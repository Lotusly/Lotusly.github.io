$(document).ready(function(){
    
    $("#all").css("color", "#00b3cc");
    $("#game").css("color", "black");
    $("#music").css("color", "black");
    $("#all").css("font-size", "175%");
    $("#game").css("font-size", "150%");
    $("#music").css("font-size", "150%");

    $("#all").click(function() {
        $(".game-item").fadeIn();
        $(".music-item").fadeIn();

        $("#all").css("color", "#00b3cc");
        $("#game").css("color", "black");
        $("#music").css("color", "black");

        $("#all").css("font-size", "175%");
        $("#game").css("font-size", "150%");
        $("#music").css("font-size", "150%");
    });

    $("#game").click(function() {
        $(".game-item").fadeIn();
        $(".music-item").hide();

        $("#all").css("color", "black");
        $("#game").css("color", "#00b3cc");
        $("#music").css("color", "black");

        $("#all").css("font-size", "150%");
        $("#game").css("font-size", "175%");
        $("#music").css("font-size", "150%");
    });

    $("#music").click(function() {
        $(".game-item").hide();
        $(".music-item").fadeIn();

        $("#all").css("color", "black");
        $("#game").css("color", "black");
        $("#music").css("color", "#00b3cc");

        $("#all").css("font-size", "150%");
        $("#game").css("font-size", "150%");
        $("#music").css("font-size", "175%");
    });
});