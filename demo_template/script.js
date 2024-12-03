let btn_ajouter_element = document.getElementById("btn_ajouter");
let conteneur_element = document.getElementById("conteneur");
let template_element = document.getElementById("note_template");


btn_ajouter_element.addEventListener("click", ajouterNote);

// Pour répéter une action tous les "intervale donné"
setInterval(() => {
    ajouterNote();
}, 10000);


// Pour ajouter un délai sur une action
setTimeout(() => {
    alert("Bienvenue sur une page très utile !");
}, 5000);


function ajouterNote() {
    let clone = document.importNode(template_element.content, true);

    let div_element = clone.querySelector("div");
    let h2_element = clone.querySelector("h2"); // je récupère le premier h2 dans le clone
    let p_element = clone.querySelector("p"); // je récupère le premier p dans le clone

    h2_element.innerText = "Une note très importante";
    p_element.innerText = "Penser à signer la présence sur M2i sign !";
    
    div_element.style.backgroundColor = "#AF05AE";

    conteneur_element.appendChild(clone);
}