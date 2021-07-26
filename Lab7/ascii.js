"use strict";
var timeIntervalForAnimation = 0;
turboOptionChanged();
var intervalForAnimation = 0;
var isStartBtnPressed = false;
var indexToShow = 0;

function splitAnimation(){
    var e = document.getElementById("animationTypeDdl");
    var selectedAnimation = e.options[e.selectedIndex].value;

    return ANIMATIONS[selectedAnimation].split("=====\n");
}

function animate() {
    if (isStartBtnPressed) {
        var exerciseSpilt = splitAnimation();
        var length = exerciseSpilt.length;
        intervalForAnimation = setInterval(function () {
            if (indexToShow >= length) {
                indexToShow = 0;
            }
            document.getElementById("mainTextArea").value = exerciseSpilt[indexToShow];
            indexToShow++;
        }, timeIntervalForAnimation);
    }
}

function changeAnimation() {
    clearInterval(intervalForAnimation);
    animate();
}

function startAnimation() {
    isStartBtnPressed = true;
    animate();
    document.getElementById("btnStart").disabled = true;
    document.getElementById("animationTypeDdl").disabled = true;
    document.getElementById("btnStop").disabled = false;
}

function stopAnimation() {
    isStartBtnPressed = false;
    clearInterval(intervalForAnimation);
    document.getElementById("btnStop").disabled = true;
    document.getElementById("animationTypeDdl").disabled = false;
    document.getElementById("btnStart").disabled = false;
}

function changeAnimationFont() {
    var e = document.getElementById("fontSizeDdl");
    var selectedFontSize = e.options[e.selectedIndex].value;
    document.getElementById("mainTextArea").style.fontSize = selectedFontSize;
    clearInterval(intervalForAnimation);
    animate();
}

function turboOptionChanged() {
    if (document.getElementById("truboCheckBox").checked) {
        timeIntervalForAnimation = 50;
        clearInterval(intervalForAnimation);
        animate();
    }
    else {
        timeIntervalForAnimation = 250;
        clearInterval(intervalForAnimation);
        animate();
    }
}
