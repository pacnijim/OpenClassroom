/*
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
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

for (let i = 0; i < listeLiens.length; i++)
{
  //initialisation des variables
  var post = document.createElement("div");
  var lien = document.createElement("a");
  var lienText = document.createElement("span");
  var auteur = document.createElement("span");

  // affectation de la variable lien (a)
  lien.href = listeLiens[i].url;
  lien.textContent = listeLiens[i].titre;
  lien.style.color = "#428bca";
  lien.style.fontWeight = "bold";
  lien.style.textDecoration = "none";

  //affectation de la variable lienText (span)
  lienText.textContent = ` ${listeLiens[i].url}`;

  //affectation variable auteur (span)
  auteur.textContent = "Ajouté par " + listeLiens[i].auteur;

  //ajout variables dans la div
  post.appendChild(lien);
  post.appendChild(lienText);
  post.appendChild(document.createElement("br"));
  post.appendChild(auteur);

  //ajout class à la div
  post.setAttribute("class", "lien");

  //ajour de la div a la page web
  document.getElementById("contenu").appendChild(post);
}
