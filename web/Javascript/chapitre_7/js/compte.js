var compte = {
  titulaire: "Alex",
  solde: 0,
  crediter: function (){
    this.solde = this.solde + Number(prompt("Entré le credit:"));
  },
  debiter: function (){
    this.solde = this.solde - Number(prompt("Entré le credit:"));
  },
  decrire: function (){
    return (`Titulaire : ${this.titulaire}, solde : ${this.solde}`);
  }
};

console.log(compte.decrire());
compte.crediter();
console.log(compte.decrire());
compte.debiter();
console.log(compte.decrire());
