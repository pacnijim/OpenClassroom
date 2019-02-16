let boutonElt = document.querySelector("button");
let i = true;
let nombreDeSec = document.getElementById("sec");
let intervalId;
function compteurSec()
{
  let tmp = Number(nombreDeSec.textContent);
  nombreDeSec.textContent = tmp + 1;
}

boutonElt.addEventListener("click", function () {
  if (i === true)
  {
    console.log(boutonElt.textContent);
    boutonElt.textContent = "Arrêter";
    i = false;
    intervalId = setInterval(compteurSec, 1000);
  }
  else
  {
    console.log(boutonElt.textContent);
    boutonElt.textContent = "Démarrer";
    i = true;
    clearInterval(intervalId);
  }
});
