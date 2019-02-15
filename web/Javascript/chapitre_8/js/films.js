var film = {
  init: function(titre, année, réal){
    this.titre = titre;
    this.année = année;
    this.réal = réal;
  },
  decrire: function(){
    return (`${this.titre} (${this.année}), de ${this.réal}.`);
  }
}

var film1 = Object.create(film);
film1.init("Le loup de Wall Street", 2013, "Martin Scorsese");
var film2 = Object.create(film);
film2.init("Vice-Versa", 2015, "Pete Docter");
var film3 = Object.create(film);
film3.init("Babysitting", 2013, "Philippe Lacheau et Nicoles Benamou");

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function(film) { console.log(film.decrire());});
