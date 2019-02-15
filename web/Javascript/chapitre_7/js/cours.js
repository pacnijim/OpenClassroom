var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

// Constructeur MonObjet
function MonObjet()
{
  //Initialisation de l'MonObj
  // ...
}

// Instanciation d'un objet à partir du constructeur
var monObj = new MonObjet();

console.log(stylo.type);
console.log(stylo.couleur);
console.log(stylo.marque);

console.log("test avec []");
console.log(stylo['type']);
console.log(stylo['couleur']);
console.log(stylo['marque']);

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.couleur = "rouge";

console.log(`Mon stylo à ${stylo.type} ${stylo.marque} écrit en ${stylo.couleur}`);

// Ajouter une propriété
stylo.prix = 2.5;

console.log(`Et il coûte ${stylo.prix}`);
