var dropdown = document.getElementById("states");
var postcard = document.getElementById("postcard");
var greetings = document.getElementById("greeting");
var stateHeading = document.getElementById("state-heading");


dropdown.addEventListener("change",changestate);

function changestate(){
    greetings.innerHTML = "Greetings from";
    postcard.style.backgroundImage = `url('img/${dropdown.value}@2x.jpg')`;
}