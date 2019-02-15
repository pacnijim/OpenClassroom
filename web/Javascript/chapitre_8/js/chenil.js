var chien = {
  init: function(nom, race, taille){
    this.nom = nom;
    this.race = race;
    this.taille = taille;
  },
  aboyer: function(){
    var aboiement = "Whoua ! Whoua !";
    if (this.taille < 25)
      aboiement = "Kaii ! Kaii !";
    else if (this.taille > 60)
      aboiement = "Grrr ! Grrr !";
    return aboiement;
  }
};

var crokdur = Object.create(chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
var pupuce = Object.create(chien);
pupuce.init("Pupuce", "bichon", 22);
var medor = Object.create(chien);
chien.init("Médor", "labrador", 58);

var chenil = [];
chenil.push(crokdur);
chenil.push(pupuce);
chenil.push(medor);

console.log("Le chenil héberge " + chenil.length + " chien(s) :");
chenil.forEach(function (chien) {
    console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm. " +
        "Il aboie : " + chien.aboyer());
});
