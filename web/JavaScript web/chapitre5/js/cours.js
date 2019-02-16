function clic()
{
  console.log("Clic !");
}

var boutonElt = document.getElementById("bouton");
boutonElt.addEventListener("click", clic);


//Ajout gestionnaire d'event
var boutonElt = document.getElementById("bouton");

bouton.addEventListener("click", function (){
  console.log("clic"); //fonction anonyme
});

//Suppression gestionnaire d'event
boutonElt.removeEventListener("click", clic);

//Famille d'evènement
document.getElementById("bouton").addEventListener("click", function (e) {
  console.log("Evènement : " + e.type + ", text de la cible : " + e.target.textContent);
});

//Gestio evènements courant

//Clavier
document.addEventListener("keypress", function (e) {
  console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
});

function infosClavier(e)
{
  console.log(`Evènement clavier : ${e.type}, touche : ${e.keyCode}`);
}

document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier);


//Souris
function getBoutonSouris(code) {
  var bouton = "inconnu";
  switch (code) {
  case 0:
      bouton = "gauche";
      break;
  case 1:
      bouton = "milieu";
      break;
  case 2:
      bouton = "droit";
      break;
  }
  return bouton;
}

function infosSouris(e) {
  //console.log("Evènement souris : " + e.type + ", bouton : " + getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
  console.log(`Evènement souris : ${e.type}, bouton : ${getBoutonSouris(e.button)}, X : ${e.clientX}, Y : ${e.clientY}`);
}

document.addEventListener("click", infosSouris);
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);

//Chargement de la page
window.addEventListener("load", function (){
  console.log("Page entièrement chargée");
});

//Fermeture de la page
window.addEventListener("beforeunload", function (e){
  const message = "On est bien ici!";
  e.returnValue = message;
  return message;
});

//Bonus propagation
document.addEventListener("click", function (){
  console.log("Gestionnaire document");
});
document.getElementById("para").addEventListener("click", function () {
  console.log("Gestionnaire de paragraphe");
});
document.getElementById("propa").addEventListener("click", function (){
  console.log("Gestionnaire bouton");
});

//Stop propagation
document.getElementById("propa").addEventListener("click", function (e){
  console.log("Gestionnaire bouton");
  e.stopPropagation();
});

//Modifier comportement event
document.getElementById("interdit").addEventListener("click", function (e){
  console.log("Continuez plutôt à lire le cours ;)");
  e.preventDefault();
});
