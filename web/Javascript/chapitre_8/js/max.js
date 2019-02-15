var valeurs = [11, 3, 7, 2, 9, 10];

var max = 0;
for (i = 0; i < valeurs.length; i++)
  if (max < valeurs[i])
    max = valeurs[i];

console.log(`La valeurs max est ${max}.`);
