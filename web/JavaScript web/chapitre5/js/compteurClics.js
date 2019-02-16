/*compte et affiche sur la page le nombre de clics
sur le bouton nommé "clic".
Le bouton nommé "desactiver" permet. */



let nbrClic = 0;
let boutonElt = document.getElementById("clic");
let stopElt = document.getElementById("desactiver");
function clicPlusUn()
{
  nbrClic += 1;
  console.log(`${nbrClic} click`);
  document.getElementById("compteurClics").innerHTML = nbrClic;
}
function stopBoutonElt()
{
  console.log("stop du comptage!");
  boutonElt.removeEventListener("click", clicPlusUn);
}
boutonElt.addEventListener("click", clicPlusUn);
stopElt.addEventListener("click", stopBoutonElt);
