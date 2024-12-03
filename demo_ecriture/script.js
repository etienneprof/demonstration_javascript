// 1ere etape : je récupère les références vers mon doc html
let conteneur_element = document.getElementById("conteneur");
let mon_texte_element = document.getElementById("mon_texte");
let mon_formulaire_element = document.getElementById("mon_formulaire");
let saisie_element = document.getElementById("saisie");
let saisie_bonne_pratique_element = document.getElementById("saisie_bonne_pratique");

// 2e etape : je crée les fonctions utilisées par mon html
function ajouterTexte() {
    let p_element = document.createElement("p");
    p_element.innerHTML = saisie_element.value;
    saisie_element.value = "";

    conteneur_element.appendChild(p_element);
}

function changerCouleur() {
    if (mon_texte_element.classList.contains("rouge")) {
        mon_texte_element.classList.remove("rouge");
        mon_texte_element.classList.add("jaune");
    } else if (mon_texte_element.classList.contains("jaune")) {
        mon_texte_element.classList.remove("jaune");
        mon_texte_element.classList.add("bleue");
    } else {
        mon_texte_element.classList.remove("bleue");
        mon_texte_element.classList.add("rouge"); 
    }
}

function cacher() {
    if (mon_formulaire_element.classList.contains("cache")) {
        mon_formulaire_element.classList.remove("cache");
    } else {
        mon_formulaire_element.classList.add("cache");
    }
}

function afficherPrompt() {
    let prenom = prompt("Comment vous appelez-vous ?");
    alert("Vous vous appelez " + prenom);

    if (confirm("Voulez-vous supprimer ?")) {
        alert("Suppression finie !");
    }
}

// Utilisation du addEventListener pour associer une fonction à un événement sur la page HTML
saisie_bonne_pratique_element.addEventListener("input", afficherInput);

function afficherInput(event) {
    console.log(event.target.value);
}