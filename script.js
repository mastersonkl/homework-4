
window.onload = function () {
    $("#start-button").on("click", game.triviaTimer);
    $("#start-button").click(game.triviaTimer);
  
};

var game = {

    timer: 0,
    seconds: 10,
    seconds: 45,

    triviaTimer: function () {
        $("#start-button").hide();
        $("#timer").html('<div>00:' + game.seconds + '</div>').addClass('theTime');
        $("#timer").css('visibility', 'visible');
        $("#timer").html('<div>00:' + game.seconds);
        game.timer = setInterval(game.count, 1000);
        
    },

   
    count: function () {
        game.seconds--;
        game.checkTime();
        $("#timer").html('<div>00:' + game.seconds + '</div>').addClass('theTime');
        $("#timer").html('<div>00:' + game.seconds);
        if (game.seconds < 1) {
            game.stopGame();
        };
    },

    checkTime: function () {
        if (game.seconds < 10) {
            game.seconds = "0" + game.seconds
        };
        return game.seconds;
    },
}

