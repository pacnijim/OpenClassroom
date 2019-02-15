/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
let i = 1;
let nbr = 0;
console.log("Trouvez un nombre entre 1 et 100.\nVous avez 6 essais!");
nbr = Number(prompt("Entrez un nombre :"));
while (i < 6 && nbr !== solution)
{
  if (nbr > solution)
    console.log(`${nbr} est trop grand!`);
  else if (nbr < solution)
    console.log(`${nbr} est trop petit!`);
  nbr = Number(prompt("Entrez un nombre :"));
  i++;
}
if (nbr > solution)
  console.log(`${nbr} est trop grand!`);
else if (nbr < solution)
  console.log(`${nbr} est trop petit!`);
if (i === 6 && nbr !== solution)
  console.log(`Perdu...La solution était ${solution}`);
else
  console.log(`Bravo ! La solution était ${solution}\nVous avez trouvé en ${i} essai(s)`);
