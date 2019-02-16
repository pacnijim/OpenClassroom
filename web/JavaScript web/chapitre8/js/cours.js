/*1
// Création d'une requête HTTP
var req = new XMLHttpRequest();
// Requête HTTP GET synchrone vers le fichier langages.txt publié localement
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt", false);
// Envoi de la requête
req.send(null);
// Affiche la réponse reçue pour la requête
console.log(req.responseText);
*/

/*2
var req = new XMLHttpRequest();
// La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
// Gestion de l'événement indiquant la fin de la requête
req.addEventListener("load", function () {
    // Affiche la réponse reçue pour la requête
    console.log(req.responseText);
});
req.send(null);
*/

/*3
var req = new XMLHttpRequest();
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
        console.log(req.responseText);
    } else {
        // Affichage des informations sur l'échec du traitement de la requête
        console.error(req.status + " " + req.statusText);
    }
});
req.addEventListener("error", function () {
    // La requête n'a pas réussi à atteindre le serveur
    console.error("Erreur réseau");
});
req.send(null);
*/

// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès

/*4*/
/*
function afficher(reponse)
{
    console.log(reponse);
}
ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);
*/

/*5
var avion = {
    marque: "Airbus",
    couleur: "A320"
};

console.log(avion);
// Transforme l'objet JavaScript en chaîne de caractères JSON
var texteAvion = JSON.stringify(avion);
console.log(texteAvion);
// Transforme la chaîne de caractères JSON en objet JavaScript
console.log(JSON.parse(texteAvion));
*/

/*6
var avions = [
    {
        marque: "Airbus",
        couleur: "A320"
    },
    {
        marque: "Airbus",
        couleur: "A380"
    }
];
console.log(avions);
// Transforme le tableau d'objets JS en chaîne de caractères JSON
var texteAvions = JSON.stringify(avions);
console.log(texteAvions);
// Transforme la chaîne de caractères JSON en tableaux d'objets JavaScript
console.log(JSON.parse(texteAvions));
*/
/*
ajaxGet("http://localhost/javascript-web-srv/data/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    })
});
*/
/*
function afficherFilms(reponse)
{
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    });
}
ajaxGet("http://localhost/javascript-web-srv/data/films.json", afficherFilms);
*/

/*Ex1*/
function displayLanguage(reponse)
{
  let names = reponse.split(';');
  for (let i = 0; i < names.length; i++)
  {
    let name = document.createElement("li");

    name.textContent = names[i];
    document.getElementById("langages").appendChild(name);
  }
}
ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", displayLanguage);


/*Ex2*/
function displayTableaux(reponse)
{
  let tableaux = JSON.parse(reponse);
  let tabElt = document.createElement("table");
  let lineTitre = document.createElement("tr");

  for (let i = 0; i < 3; i++)
  {
    let NameC = document.createElement("th");

    if (i === 0)
      NameC.textContent = "Nom";
    else if (i === 1)
      NameC.textContent = "Année";
    else
      NameC.textContent = "Auteur";
    lineTitre.appendChild(NameC);
  }

  tabElt.appendChild(lineTitre);

  for (let i = 0; i < tableaux.length; i++)
  {
    let line = document.createElement("tr");
    let nameTab = document.createElement("td");
    let anneeTab = document.createElement("td");
    let auteurTab = document.createElement("td");

    nameTab.textContent = tableaux[i].nom;
    anneeTab.textContent = tableaux[i].annee;
    auteurTab.textContent = tableaux[i].auteur;

    line.appendChild(nameTab);
    line.appendChild(anneeTab);
    line.appendChild(auteurTab);

    tabElt.appendChild(line);
  }
document.getElementById("contenu").appendChild(tabElt);
}
ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", displayTableaux);
