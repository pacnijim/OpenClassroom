let form = document.querySelector("form");
let regexNbr = /[0-9]/;

form.addEventListener("submit", function (e) {
  let mdp1Elt = form.elements.mdp1.value;
  let mdp2Elt = form.elements.mdp2.value;
  let infoMdpElt = document.getElementById("infoMdp");
  if (mdp1Elt.length < 6 && mdp2Elt.length < 6)
    infoMdpElt.textContent = "Erreur: la longueur minimale du mot de passe est 6 caractères";
  else if (mdp1Elt !== mdp2Elt)
    infoMdpElt.textContent = "Erreur: les mots de passe doivent être identique";
  else if (!regexNbr.test(mdp1Elt))
    infoMdpElt.textContent = "Erreur : il doit y avoir un chiffre";
  else
    infoMdpElt.textContent = "mot de passe ok!";
  e.preventDefault();
});
