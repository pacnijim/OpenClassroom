let pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "MonPseudo";

pseudoElt.addEventListener("focus", function () {
  document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});

pseudoElt.addEventListener("blur", function (e) {
  document.getElementById("aidePseudo").textContent = "";
});

pseudoElt.focus();

document.getElementById("confirmation").addEventListener("change", function (e) {
  console.log(`Demande de confirmation : ${e.target.checked}`);
});

let aboElts = document.getElementsByName("abonnement");
for (let i = 0; i < aboElts.length; i++)
{
  aboElts[i].addEventListener("change", function (e) {
    console.log(`Formule d'abonnement choisie : ${e.target.value}`);
  });
}

document.getElementById("nationalite").addEventListener("change", function (e) {
  console.log(`Code de nationalité : ${e.target.value}`);
});

let form = document.querySelector("form");
console.log(`Nombre de champs de saisie : ${form.elements.length}`);
console.log(`Premier element du formulaire : ${form.elements[0].name}`);
console.log(`Type de l'element mot de pass (mdp): ${form.elements.mdp.type}`);

//Affiche les donnée saisies ou choisies

form.addEventListener("submit", function (e) {
  let pseudo = form.elements.pseudo.value;
  let mdp = form.elements.mdp.value;
  let courriel = form.elements.courriel.value;

  console.log(`Vous avez choisi le pseudo "${pseudo}", le mot de passe "${mdp}" et le courriel "${courriel}"`);
  if (form.elements.confirmation.checked)
    console.log("Vous avez demandé une confirmation d'inscription par courriel");
  else
    console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");
  switch (form.elements.abonnement.value) {
      case "abonewspromo":
        console.log("Vous êtes abonné(e) à la newsletter et aux promotions");
        break;
      case "abonews":
        console.log("Vous êtes abonné(e) à la newsletter");
        break;
      case "aborien":
        console.log("Vous n'êtes abonné(e) à rien");
        break;
      default:
        console.log("Erreur : code d'abonnement non reconnu");
  }
  switch (form.elements.nationalite.value) {
    case "FR":
      console.log("Vous êtes francais(e)");
      break;
    case "BE":
      console.log("Vous êtes belge");
      break;
    case "SUI":
      console.log("Vous êtes suisse");
      break;
    default:
      console.log("Erreur : code de nationalité non reconnu");
  }
  e.preventDefault();
});

//Verif longueur du mdp saisi
document.getElementById("mdp").addEventListener("input", function (e) {
  let mdp = e.target.value;
  let longueurMdp = "faible";
  let couleurMsg = "red";
  if (mdp.length >= 8)
  {
    longueurMdp = "suffisante";
    couleurMsg = "green";
  }
  else if (mdp.length >= 4)
  {
    longueurMdp = "moyenne";
    couleurMsg = "orange";
  }
  let aideMdpElt = document.getElementById("aideMdp");
  aideMdpElt.textContent = `Longueur : ${longueurMdp}`;
  aideMdpElt.style.color = couleurMsg;
})

//Validation de saisie
/*1
document.getElementById("courriel").addEventListener("blur", function (e) {
  let validiteCourriel = "";
  if (e.target.value.indexOf("@") === -1)
    validiteCourriel = "Adresse invalide";
  document.getElementById("aideCourriel").textContent = validiteCourriel;
});
*/
document.getElementById("courriel").addEventListener("blur", function (e) {
  let regexCourriel = /.+@.+\..+/;
  let validiteCourriel = "";
  if (regexCourriel.test(e.target.value) === -1)
    validiteCourriel = "Adresse invalide";
  document.getElementById("aideCourriel").textContent = validiteCourriel;
});
