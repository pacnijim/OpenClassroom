/*
Activité : gestion des contacts
*/
var choix = 3;
var Contacts = [];
var Contact = {
  init: function (nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  },
  decrire: function () {
    return (`Nom: ${this.nom}, prénom: ${this.prenom}`);
  }
};

var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");
var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");

Contacts.push(contact1);
Contacts.push(contact2);

while (choix !== 0)
{
  if (choix === 3)
    console.log("Bienvenue dans le gestionnaire des contacts !");
  console.log("1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter");
  choix = Number(prompt("Choisissez un option:"));
  if (choix === 1)
  {
    console.log("Voici la liste de tous vos contacts :");
    for (i = 0; i < Contacts.length; i++)
      console.log(Contacts[i].decrire());
  }
  else if (choix === 2)
  {
    var nouveauContact = Object.create(Contact);
    nouveauContact.nom = prompt("Entrez le nom du nouveau contact:");
    nouveauContact.prenom = prompt("Entrez le prénom du nouveau contact:");
    Contacts.push(nouveauContact);
    console.log("Le nouveau contact a été ajouté");
  }
  console.log("\n");
}
console.log("Au revoir !");
// Désolé j'aurais pu faire des fonctions pour les choix ce qui aurait été plus visible mais j'ai eu la flemme :s
