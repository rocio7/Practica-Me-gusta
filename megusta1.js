var count=3;
var countElement = document.querySelector("#count");

function like() {
    count++;
    countElement.innerHTML= count + " like(s)";
}