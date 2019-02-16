/*
function createFormulaire()
{
  let labelTitreForm = document.createElement("label");
  let titreForm = document.createElement("input");
  let labelContenuForm = document.createElement("label");
  let contenuForm = document.createElement("textarea");
  let boutonForm = document.createElement("button");

  labelTitreForm.textContent = "Titre : ";

  titreForm.id = "titre";
  titreForm.placeholder = "Entrez un titre";
  titreForm.required = "required";

  labelContenuForm.textContent = "Contenu :";

  contenuForm.id = "contenu";
  contenuForm.placeholder = "Entrez contenu";
  contenuForm.required = "required";
  contenuForm.rows = "5";

  boutonForm.textContent = "Ajouter";
  boutonForm.type = "submit";
  boutonForm.value = "Ajouter";

  document.getElementById("formulaire").appendChild(labelTitreForm);
  document.getElementById("formulaire").appendChild(titreForm);

  document.getElementById("formulaire").appendChild(document.createElement("br"));
  document.getElementById("formulaire").appendChild(document.createElement("br"));

  document.getElementById("formulaire").appendChild(labelContenuForm);
  document.getElementById("formulaire").appendChild(document.createElement("br"));
  document.getElementById("formulaire").appendChild(contenuForm);

  document.getElementById("formulaire").appendChild(document.createElement("br"));
  document.getElementById("formulaire").appendChild(document.createElement("br"));

  document.getElementById("formulaire").appendChild(boutonForm);
}
createFormulaire();
*/
let formElt = document.querySelector("form");

formElt.addEventListener("submit", function (event) {
  event.preventDefault();
  let data = new FormData(formElt);

  ajaxPost("https://oc-jswebsrv.herokuapp.com/article", data, function () {
    document.getElementById("resultat").appendChild(document.createElement("br"));
    document.getElementById("resultat").appendChild(document.createTextNode("L'article a bien été ajouté."));
  });
});
