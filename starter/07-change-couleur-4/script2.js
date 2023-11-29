/*
EXERCICE 6 : Change couleur (4) - v2
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 2 : une seule fonction qui utilise e.target pour s'adapter au  bouton sur lequel on clique
AJOUT : Quand on clique sur le bouton, la couleur de fond de la page change de manière aléatoire
*/

const couleurs = {
    changementCouleurs() {
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('click', (e) => {
                document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`;
            })
        })
    }
};

couleurs.changementCouleurs();