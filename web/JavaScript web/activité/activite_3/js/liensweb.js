/*
  1- Les fonctions (l7 à l70)
  2- Déclaration de variable "global" (l71 à l83)
  3- Event (l84 à l186)
*/

//      1-Les fonctions
//fonction pour verifier l'url
function urlValid(url)
{
  let regexUrl1 = /^http:\/\/.+\..+/;
  let regexUrl2 = /^http.s?:\/\/.+\..+/;

  if (!regexUrl1.test(url) && !regexUrl2.test(url))
    url = `http://${url}`;
  return (url);
}

//fonction pour ajouter le nouvelle elements
function displayOneEltOnTop(element)
{
  //declaration des variables et creation
  let newPost = document.createElement("div");
  let lien = document.createElement("a");
  let lienText = document.createElement("span");
  let auteur = document.createElement("span");

  //affectation de la variables en titre a
  lien.href = element.url;
  lien.textContent = element.titre;
  lien.style.color = "#428bca";
  lien.style.fontWeight = "bold";
  lien.style.textDecoration = "none";

  //affectation de la variable lienText (div)
  lienText.textContent = ` ${element.url}`;

  //affectation variable auteur (div)
  auteur.textContent = "Ajouté par " + element.auteur;

  //ajout class à la div
  newPost.setAttribute("class", "lien");

  //ajout variables dans la div
  newPost.appendChild(lien);
  newPost.appendChild(lienText);
  newPost.appendChild(document.createElement("br"));
  newPost.appendChild(auteur);

  //ajour de la div a la page web
  document.getElementById("contenu").insertBefore(newPost, document.getElementById("contenu").childNodes[2]);
}

//Affichage des liens à partir du serveur
function displayEltsOnServ(elements)
{
  //de elements.length à 0 car on utilse insertBefore dans la fonction d'affichage
  for (let i = elements.length - 1; i >= 0; i--)
    displayOneEltOnTop(elements[i]);
}

//recherche les infos sur le serveur et appel fonction d"affichage
function liensWeb()
{
  ajaxGet("https://oc-jswebsrv.herokuapp.com/api/liens", function (response) {
      let listeLiens = JSON.parse(response);
      displayEltsOnServ(listeLiens);
  });
}

//      2-Declaration de variable "global"
let boutonElt1 = document.createElement("button");
let divElt = document.createElement("div");

boutonElt1.textContent = "Ajouter un lien";

divElt.appendChild(boutonElt1);
divElt.appendChild(document.createElement("br"));
divElt.appendChild(document.createElement("br"));

//Ajouté la div du bouton ajouter dans la page
document.getElementById("contenu").appendChild(divElt);

//      3-Event
//Event du bouton ajouter un lien
boutonElt1.addEventListener("click", function () {

  //cacher bouton ajouter
  boutonElt1.style.display = "none";

  //declaration des variables
  let formElt = document.createElement("form");
  let newBouton = document.createElement("button");
  let newAuteur = document.createElement("input");
  let newLien = document.createElement("input");
  let newUrl = document.createElement("input");

  //affectation des variables imput et nouveaux bouton
  newAuteur.setAttribute("type", "Text");
  newLien.setAttribute("type", "Text");
  newUrl.setAttribute("type", "Text");

  newAuteur.setAttribute("name", "auteur");
  newLien.setAttribute("name", "titre");
  newUrl.setAttribute("name", "url");

  newAuteur.setAttribute("id", "auteur");
  newLien.setAttribute("id", "titre");
  newUrl.setAttribute("id", "url");

  newAuteur.setAttribute("placeholder", "Entrez votre pseudo");
  newLien.setAttribute("placeholder", "Entrez le titre du lien");
  newUrl.setAttribute("placeholder", "Entrez l'url du lien");

  newBouton.id = "valideInfo";
  newBouton.setAttribute("type", "submit");
  newBouton.setAttribute("value", "Envoyer");
  newBouton.textContent = "Ajouter";

  newAuteur.setAttribute("required", "required");
  newLien.setAttribute("required", "required");
  newUrl.setAttribute("required", "required");

  //Ajouter le imput et le bouton au formulaire
  formElt.appendChild(newAuteur);
  formElt.appendChild(newLien);
  formElt.appendChild(newUrl);
  formElt.appendChild(newBouton);

  //inserer le formulaire au du contenu
  divElt.insertBefore(formElt, document.getElementById("contenu").childNodes[1].childNodes[2]);

  //event nouveau bouton ajouter
  formElt.addEventListener("submit", function (event) {

    //annuler rechargement de page
    event.preventDefault();

    //enlever formulaire et remettre le premier bouton
    boutonElt1.style.display = "";
    newAuteur.style.display = "none";
    newLien.style.display = "none";
    newUrl.style.display = "none";
    newBouton.style.display = "none";

    //declaration de variablr pour message de confirmation d'ajout et d'une variable pour recevoir les info marquer
    let urlServCible = "https://oc-jswebsrv.herokuapp.com/api/lien";
    let lienElt = {
        titre: "",
        url: "",
        auteur: ""
    };
    //affectation des valeur sasisi
    lienElt.titre = newLien.value;
    lienElt.url = newUrl.value;
    lienElt.auteur = newAuteur.value;

    //verif de l'url
    lienElt.url = urlValid(lienElt.url);

    ajaxPost(urlServCible, lienElt, function (response) {
      let confirmNewObject = document.createElement("div");
      let textConfirm = document.createElement("p");

      displayOneEltOnTop(lienElt);
      //Afficher message de confirmation
      confirmNewObject.style.backgroundColor = "#00FFFF";
      confirmNewObject.style.color = "white";
      confirmNewObject.style.height = 2.5 + "em";
      confirmNewObject.style.lineHeight = 2.5 + "em";
      confirmNewObject.style.whiteSpace = "nowrap";

      textConfirm.textContent = `Le lien "${lienElt.titre}" a bien été ajouter.`;

      confirmNewObject.appendChild(textConfirm);
      confirmNewObject.appendChild(document.createElement("br"));

      document.body.insertBefore(confirmNewObject, document.getElementById("contenu"));

      //supprimer le message
      setTimeout(function () {
        confirmNewObject.style.display = "none";
        }, 2000);
      },
      true);
  });
});

//appel  de la fonction liensweb pour afficher les liens déjà sur le serveur
liensWeb();
