var CompteBancaire = {
  nomTitulaire: "",
  solde: 0,
  initCB: function (nomTitulaire, solde){
    this.nomTitulaire = nomTitulaire;
    this.solde = solde;
  },
  debiter: function (debit) {
    this.solde -= montant;
  },
  crediter: function (credit) {
    this.solde += montant;
  },
  decrire: function () {
    return (`Titulaire: ${this.nomTitulaire}, solde : ${this.solde} euros`);
  }
};
var CompteEpargne = Object.create(CompteBancaire);
CompteEpargne.initCE = function (nomTitulaire, solde, intérêts) {
    this.initCB(nomTitulaire, solde);
    this.intérêts = intérêts;
};
CompteEpargne.ajouterInterets = function () {
  this.solde += (this.solde * this.intérêts);
};
CompteBancaire.pacis = "Pacis";

var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);
console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());
console.log(compte1.pacis);
console.log(compte2.pacis);

var a = 9;
var b = 54;
console.log(a + b);
