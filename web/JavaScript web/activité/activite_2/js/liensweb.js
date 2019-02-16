/*
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
let listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

//variable pour nouveau lien
let lienElt = [
  {
    titre: "",
    url: "",
    auteur: ""
  }
];

//fonction pour verifier l'url
function urlValid(url)
{
  let regexUrl1 = /^http:\/\/.+\..+/;
  let regexUrl2 = /^https:\/\/.+\..+/;

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

  //ajout variables dans la div
  newPost.appendChild(lien);
  newPost.appendChild(lienText);
  newPost.appendChild(document.createElement("br"));
  newPost.appendChild(auteur);

  //ajout class à la div
  newPost.setAttribute("class", "lien");

  //ajour de la div a la page web
  document.getElementById("contenu").insertBefore(newPost, document.getElementById("contenu").childNodes[2]);
}

//Affichage de bases
function displayElts(elements)
{
  for (let i = 0; i < elements.length; i++)
  {
    //initialisation des variables
    let post = document.createElement("div");
    let lien = document.createElement("a");
    let lienText = document.createElement("span");
    let auteur = document.createElement("span");

    // affectation de la variable lien (a)
    lien.href = elements[i].url;
    lien.textContent = elements[i].titre;
    lien.style.color = "#428bca";
    lien.style.fontWeight = "bold";
    lien.style.textDecoration = "none";

    //affectation de la variable lienText (div)
    lienText.textContent = ` ${elements[i].url}`;

    //affectation variable auteur (div)
    auteur.textContent = "Ajouté par " + elements[i].auteur;

    //ajout variables dans la div
    post.appendChild(lien);
    post.appendChild(lienText);
    post.appendChild(document.createElement("br"));
    post.appendChild(auteur);

    //ajout class à la div
    post.id = "base";
    post.setAttribute("class", "lien");

    //ajour de la div a la page web
    document.getElementById("contenu").appendChild(post);
  }
}

//declaration des variables bouton ajouter et div
let boutonElt1 = document.createElement("button");
let divElt = document.createElement("div");

boutonElt1.textContent = "Ajouter un lien";

divElt.appendChild(boutonElt1);
divElt.appendChild(document.createElement("br"));
divElt.appendChild(document.createElement("br"));

//Ajouté la div du bouton ajouter dans la page
document.getElementById("contenu").appendChild(divElt);

//event du bouton ajouter
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

  newAuteur.setAttribute("placeholder", "Entrez un nom");
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
    let newInfo = lienElt;
    let confirmNewObject = document.createElement("div");
    let textConfirm = document.createElement("p");

    //affectation des valeur sasisi
    newInfo.titre = newLien.value;
    newInfo.url = newUrl.value;
    newInfo.auteur = newAuteur.value;

    //verif de l'url
    newInfo.url = urlValid(newInfo.url);

    //appelle de la fonction pour nouvelle element
    displayOneEltOnTop(newInfo);

    //Afficher message de confirmation
    confirmNewObject.style.backgroundColor = "#00FFFF";
    confirmNewObject.style.height = 2.5 + "em";
    confirmNewObject.style.lineHeight = 2.5 + "em";
    confirmNewObject.style.whiteSpace = "nowrap";

    textConfirm.textContent = `Le lien "${newInfo.titre}" a bien été ajouter.`;

    confirmNewObject.appendChild(textConfirm);
    confirmNewObject.appendChild(document.createElement("br"));

    document.body.insertBefore(confirmNewObject, document.getElementById("contenu"));

    //supprimer le message
    setTimeout(function () {
      confirmNewObject.style.display = "none"
    }, 2000);
  });
});

displayElts(listeLiens);
