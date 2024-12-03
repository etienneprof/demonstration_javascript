// une variable qui contient plusieurs informations
let etablissements = ["maternelle", "primaire", "collège"];

// boucle foreach pour parcourir 1 à 1 les éléments du tableau (avec utilisation d'une fonction fléchée)
etablissements.forEach( etablissement => {
    console.log(etablissement);
});

// boucle foreach pour parcourir 1 à 1 les éléments du tableau (avec utilisation d'une fonction classique)
etablissements.forEach(afficherEtablissement);

function afficherEtablissement (etablissement) {
    console.log(etablissement);
}

etablissements.push("Lycée");
etablissements.forEach(afficherEtablissement);


console.log(etablissements[1]); // affichage du 2e élément du tableau
etablissements[1] = "élémentaire"; // j'écrase la 2e valeur du tableau avec "élémentaire"
console.log(etablissements[1]); // affichage du 2e élément du tableau

console.log("-------------------------------------");
console.log(etablissements);
etablissements[15] = "fac";

console.log(etablissements);

console.log (etablissements.pop());
console.log(etablissements.shift());

console.log(
    etablissements.filter(
        e => e.includes("c")
    )
);

// tri par défaut des chaines de caractères JS : majuscule, puis minuscules, puis caractères spéciaux
etablissements.sort();
console.log(etablissements);
