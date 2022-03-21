//declaration de constante pour ecriture traditionnel
/*const message = function(texte = 'Texte par défaut'){// si on definit un parametre optionnel entre parenthese alors...
    alert(texte);
}

//appel de la fonction
message();
message('Avec parametre'); //...il faudra aussi parametrer a l'appel de la fonction

//pratique risqué le hoisting : on declare la fonction apres l'appel de celle ci et javascript va déplacer le conde pour nous
/*function message() {
    alert('Bonjour');
}*/
/* Attention, si on crée une variable au sein d'une fonction, celle-ci n'est accessible que via l'appel de la fonction*/

//creation d'une fonction fléché sans parametre
const message = () => {
    alert('fonction fléchée');
}
message();

//fonction fléchée avec parametre
const somme = (a, b) =>{
    alert('resultat : ' + (a + b));
}
somme(10, 2);
