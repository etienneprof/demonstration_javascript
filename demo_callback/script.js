let btn_traitement_element = document.getElementById("btn_traitement");

// 1er : ajout de l'événement sur le bouton
btn_traitement_element.addEventListener("click", lancerTraitement);



// 2e : déclenchement de la fonction lancerTraitement
function lancerTraitement() {
    // 5e : déclenchement du callback (fonction fléchée ci-dessous)

    console.log("Début du traitement...");

    traitementTresLong(() => { console.log("Un message personnalisé") });

    console.log("Il se passe quelque chose ici...");
}

// 3e : lancement de la fonction traitementTresLong
function traitementTresLong(callback) {

    console.log("Lancement du traitement très long");

    // traitement asynchrone.
    setTimeout(() => {
        // 4e : affichage de "traitement terminé"
        console.log("Traitement terminé.");
        callback();
    }, 6000);
}