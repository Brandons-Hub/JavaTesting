function chooseOption(){
    html.style.filter = "brightness(1.5)";
    startButton.style.top = "-100%";
    startingBackground.style.top = "0";
    html.style.filter = "brightness(0.90)"
};

document.getElementById('actualStartButton').addEventListener('click',chooseOption);