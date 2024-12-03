let prenom = "Regis";
let nom = "Hamon";
let note = 10;

let prenom2 = "Clémence";
let nom2 = "Untel";
let note2 = 8;

let prenoms = ["Regis", "Clémence"];
let noms = ["Hamon", "Untel"];
let notes = [10, 8];

prenoms.push("Etienne");
noms.push("Cassin");
notes.push(4);

for(let i = 0; i < 3; i++) {
    console.log("Affichage de l'étudiant " + i);
    console.log(prenoms[i]);
    console.log(noms[i]);
    console.log(notes[i]);
}

notes.sort();
console.log(notes);

for(let i = 0; i < 3; i++) {
    console.log("Affichage de l'étudiant " + i);
    console.log(prenoms[i]);
    console.log(noms[i]);
    console.log(notes[i]);
}


// Alternative avec des objets
let etudiants = [
    {"prenom" : "Régis", "nom" : "Hamon", "note" : 10},
    {"prenom" : "Clémence", "nom" : "Untel", "note" : 8},
    {"prenom" : "Clémence", "nom" : "Unautre", "note" : 16},
    {"prenom" : "Etienne", "nom" : "Cassin", "note" : 4}
];

for (let i = 0; i < etudiants.length; i++) {
    console.log("Affichage de l'étudiant " + i);
    console.log(etudiants[i].prenom);
    console.log(etudiants[i].nom);
    console.log(etudiants[i].note);
}

etudiants.sort((a, b) => a.note - b.note);

for (let i = 0; i < etudiants.length; i++) {
    console.log("Affichage de l'étudiant " + i);
    console.log(etudiants[i].prenom);
    console.log(etudiants[i].nom);
    console.log(etudiants[i].note);
}

// Pour inverser l'order de tri, il suffit d'inverser les positions de a et b au moment de la comparaison
etudiants.sort((a, b) => {
    let comparaison = b.prenom.localeCompare(a.prenom)

    // Si je suis capable de déterminer le tri avec le prénom, on s'arrête là et on restitue l'information
    if (comparaison != 0) return comparaison;


    // En revanche, si la comparaison vaut 0, ça veut dire que les deux étudiants ont le même prénom, on utilise donc le nom
    return b.nom.localeCompare(a.nom);
});

for (let i = 0; i < etudiants.length; i++) {
    console.log("Affichage de l'étudiant " + i);
    console.log(etudiants[i].prenom);
    console.log(etudiants[i].nom);
    console.log(etudiants[i].note);
}

etudiants[0].note = 12;
console.log(etudiants[0]);
