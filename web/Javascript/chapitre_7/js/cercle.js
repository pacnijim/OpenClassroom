var cercle = {
  rayon: 0,
  perimetre: function (){
    return (2 * Math.PI * this.rayon);
  },
  aire: function (){
    return (Math.PI * (this.rayon * this.rayon));
  }
}

var r = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO : ajoutez ici la définition de l'objet cercle
cercle.rayon = r;

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());
