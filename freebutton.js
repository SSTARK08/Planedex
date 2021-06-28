var mybtn = document.getElementById("btnLarge");
var hi = document.getElementById("hi");
function submitPoll() {
    mybtn.disabled = true;
    mybtn.style.cursor = "wait";
    mybtn.innerHTML = "Plz wait....  &#x1F512";
    setTimeout(function () {
        mybtn.disabled = false;
        mybtn.innerHTML = "FREE";
        mybtn.style.cursor = "pointer";
    }, 3000);
    
}
document.getElementById("btnLarge").addEventListener("click", submitPoll);
