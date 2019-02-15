var mousquetaires = ["Athos", "Porthos", "Aramis"];

for (i = 0; i < mousquetaires.length; i++)
  console.log(mousquetaires[i]);

console.log("Avec forEach");
mousquetaires.push("d'Artagnan");
mousquetaires.forEach(function (mousquetaire){ console.log(mousquetaire);})
