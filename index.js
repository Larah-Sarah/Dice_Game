
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

document.querySelector("h1").classList.add("h1Size");


if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Aww! It's a draw. Play Again?🚩";
}
else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins🚩";
}
else{
    document.querySelector("h1").innerHTML = "🚩Player 2 wins🚩"
}