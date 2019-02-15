/*var mangas = ["The breaker", 30, "Shingeki no kyojin", 27, "Ubell blatt", 22,
"Death note", 13, "Black lagoon", 10, "Parasite Kiseju", 10, "The arm peddler",
 7, "Gangsta", 7, "Mother Sarah", 7, "Psycho pass", 6, "Berserk", 5,
  "Jojo's bizar adventure", 5, "20th century boys", 4, "Ajin", 3, "Magi", 3,
  "Dr stone", 3, "Kingdown", 3, "Ki & hi", 2, "Sun ken rock", 2, "Truc beast", 2];

var bds = [];

console.log(`Il y a ${mangas.length} titres de mangas, et ${bds.length} Bd.`);
console.log(`La collection la plus complete et avec le plus de tome est ${mangas[0]}.`);
console.log(bds[0]);

console.log("Liste des mangas avec for:");
for (i = 0; i < mangas.length; i++)
  console.log(mangas[i]);

console.log("Liste des mangas avec forEach");
mangas.forEach(function (manga){ console.log(manga);});

bds.push("Requiem");
console.log(`Il y a ${mangas.length} titres de mangas, et ${bds.length} Bd.`);
console.log(`La seul bd est ${bds[0]}`);
console.log("Liste des bds avec forEach");
bds.forEach(function (bd){ console.log(bd);});

console.log("Liste des mangas et nombre de tome achetés avec for:");
for (i = 0; i < mangas.length - 1; i += 2)
{
  console.log(`${mangas[i]} ${mangas[i + 1]}`);
}*/

var manga = {
  init: function (titre, nombreDeTome){
    this.titre = titre;
    this.nombreDeTome = nombreDeTome;
  },
  decrire: function (){
    return (`${this.titre}, ${this.nombreDeTome} tome(s).` );
  }
};

var manga1 = Object.create(manga);
manga1.init("The breaker", 30);
var manga2 = Object.create(manga);
manga2.init("Shingeki no kyojin", 27);
var manga3 = Object.create(manga);
manga3.init("Ubell blatt", 22);

var mangasliste = [];
mangasliste.push(manga1);
mangasliste.push(manga2);
mangasliste.push(manga3);
mangasliste.forEach(function(manga){ console.log(manga.decrire());});
