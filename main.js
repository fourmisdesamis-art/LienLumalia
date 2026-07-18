// ===============================
// Lumalia Link
// main.js
// ===============================

const input = document.getElementById("search");
const button = document.getElementById("go");

// Ouvrir un lien
function openLink() {

    let value = input.value.trim().toLowerCase();

    if (value === "") {
        input.focus();
        return;
    }

    // Redirection
    window.location.href = "/" + value;

}

// Bouton
button.addEventListener("click", openLink);

// Touche Entrée
input.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        openLink();
    }

});

// Focus automatique
window.addEventListener("load", () => {
    input.focus();
});
