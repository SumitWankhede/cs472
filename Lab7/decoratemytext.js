var isBtnClicked = false;

function makeTextBigger() {
    if (isBtnClicked) {
        var myDataToMofify = document.getElementById("mainTextArea");
        myDataToMofify.style.fontSize === "" ? result = 24 : result = parseInt(myDataToMofify.style.fontSize) + 2;
        myDataToMofify.style.fontSize = result + "pt";
    }
}

function startTimer() {
    if (isBtnClicked) {
        isBtnClicked = false;
    }
    else {
        isBtnClicked = true;
    }
    setInterval(makeTextBigger, 500);
}

function checkBoxStateChanged() {
    var myDataToMofify = document.getElementById("mainTextArea");
    var isChecked = undefined;
    document.getElementById("blingCb").checked === true ? isChecked = true : isChecked = false;
    if (isChecked) {
        myDataToMofify.style.color = "green";
        myDataToMofify.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    }
    else {
        myDataToMofify.style.color = "black";
        myDataToMofify.style.textDecoration = "none";
        document.body.style.backgroundImage = "url('')";
    }
}

function malkovitch() {
    var myDataToMofify = document.getElementById("mainTextArea");
    var allWords = myDataToMofify.value.split(" ");
    myDataToMofify.value = "";
    var finalData = "";
    for (var i = 0; i < allWords.length; i++) {
        if (allWords[i].length >= 5) {
            allWords[i] = "Malkovich";
        }
        finalData = finalData + allWords[i] + " ";
    }
    myDataToMofify.value = finalData;

}