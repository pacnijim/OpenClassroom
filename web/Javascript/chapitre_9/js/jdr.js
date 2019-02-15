var Perso = {
  initStat: function (name, hp, strength) {
    this.name = name;
    this.hp = hp;
    this.strength = strength;
    this.gold = 10;
    this.keys = 1;
  },
  att: function (target) {
    if (this.hp > 0)
    {
      var dmgDeal = this.strength;
      console.log(`${this.name} attaque ${target.name}, il lui inflige ${dmgDeal} points de degats.`);
      target.hp -= dmgDeal;
      if (target.hp > 0)
        console.log(`Il reste ${target.hp}HP a ${target.name}.`);
        else
        {
            console.log(`${target.name} est KO.`);
            target.hp = 0;
        }
    }
    else
      console.log(`${this.name} ne peut pas attaquer, il est KO.`);
  }
};
var Player = Object.create(Perso);
Player.initPlayer = function (name, hp, strength) {
  this.initStat(name, hp, strength);
  this.xp = 0;
};
Player.displayStat = function () {
  return (`${this.name} a ${this.hp}hp, ${this.strength} en force, ${this.gold} pièce d'or, ${this.keys} clée(s) et ${this.xp}XP.`);
};
Player.fight = function (target) {
  if (target.hp === 0)
  {
    console.log(`${target.name} est déja KO.`);
  }
  else
  {
    this.att(target);
    if (target.hp === 0)
    {
      console.log(`${this.name} a battu ${target.name}, il gagne ${target.givenXp}XP`);
      this.xp += target.givenXp;
      this.gold += target.gold;
      target.gold = 0;
      this.keys += target.keys;
      target.keys = 0;
    }
  }
};
var Enemy = Object.create(Perso);
Enemy.initEnemy = function (name, hp, strength, race, givenXp){
  this.initStat(name, hp, strength);
  this.race = race;
  this.givenXp = givenXp;
};

var Cloud = Object.create(Player);
Cloud.initPlayer("Cloud", 150, 35);
var Barret = Object.create(Player);
Barret.initPlayer("Barret", 161, 31);
var Reno = Object.create(Enemy);
Reno.initEnemy("Reno", 35, 50, "Turk", 1000);

console.log("Bienvenue dans ce jeu d'aventure !\nVoici nos courageux héros :");
console.log(Cloud.displayStat());
console.log(Barret.displayStat());
console.log(`Un ennemi arrive : c'est un ${Reno.race} nommé ${Reno.name}.`);

Reno.att(Cloud);
Reno.att(Barret);
Cloud.fight(Reno);
Barret.fight(Reno);
console.log(Cloud.displayStat());
console.log(Barret.displayStat());
