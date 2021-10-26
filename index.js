var randomNumberOne = Math.floor((Math.random() * 6)) + 1;
var fullPathOne = "images/" + "dice" + randomNumberOne + ".png";
document.querySelectorAll("img")[0].setAttribute("src", fullPathOne);

var randomNumberTwo = Math.floor((Math.random() * 6)) + 1;
var fullPathTwo = "images/" + "dice" + randomNumberTwo + ".png";
document.querySelectorAll("img")[1].setAttribute("src", fullPathTwo);

if (randomNumberOne > randomNumberTwo) {
    document.querySelector("h1").innerHTML = "PLayer 1 wins ";
} else if (randomNumberTwo > randomNumberOne) {
    document.querySelector("h1").innerHTML = "PLayer 2 wins ";
} else {
    document.querySelector("h1").innerHTML = "Draw !";
}
 
function btn() {
    location.reload(); 
}