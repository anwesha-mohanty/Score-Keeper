var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p = document.querySelector("p");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winnngScore = 5;
var resetButton = document.querySelector("# reset");

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
        if(p1score === winnngScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2score++;
        if(p2score === winnngScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2score;
    }

});

resetButton.addEventListener("click", function(){
   reset();
});

function reset(){
    p1score = 0;
    p2score = 0;
    p1Display.textContent = p1score;
    p2Display.textContent = p2score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winnngScore = Number(this.value);
    reset();
});

