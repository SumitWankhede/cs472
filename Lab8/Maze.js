var isGameOver = false;
var isGameStarted = false;

$(function () {

    $("#start").click(function () {
        isGameStarted = true;
        isGameOver = false;
        $("div .boundary").removeClass("youlose");
    });

    $("div .boundary").mouseover(function () {
        if(isGameStarted && !isGameOver){
            $("div .boundary").addClass("youlose");
            $("#status").text("You Lose :[");
            isGameOver = true;
            isGameStarted = false;
        }
    });

    $("#end").mouseover(function () {
        if (!isGameOver) {
            $("#status").text("You Win :]");
            isGameOver = true;
            isGameStarted = false;
        }
    });

    $("#maze").mouseleave(function () {
        if (isGameStarted) {
            isGameStarted = false;
            isGameOver = true;
            $("div .boundary").addClass("youlose");
            $("#status").text("Game Over, you cheated!");
        }
    });
});

