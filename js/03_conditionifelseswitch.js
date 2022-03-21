//prompt permet a un utilisateur de saisir quelque chose, faisant poper une boite de dialogue
//let age = prompt('Saisir votre age');//

//conditions simple
/*if (age <18){
    alert('Vous êtes un mineur');
}else if(age >= 70){
    alert('Vous êtes senior');
} else{
    alert('Vous êtes majeur');
}*/

//conditions switch
let vehicule = prompt('Quel vehicule souhaitez vous ? Peugoet, BMW, Ferrari').toLowerCase();//toLowerCase() permet que la saisie recupéré soit en minuscule. toUpperCase() en majuscules

console.log(vehicule);
let km = prompt('Combien de KM souhaitez vous faire ?');

const prix = {
    peugeot: 0.4,
    bmw: 0.6,
    ferrari: 0.8
};

switch(vehicule){
    case 'peugeot':{
        alert('Vous payerez : ' + prix.peugeot * km + ' €');
        break;
    }
    case 'bmw':{
        alert('Vous payerez : ' + prix.bmw * km + ' €');
        break;
    }
    case 'ferrari':{
        alert('Vous payerez : ' + prix.ferrari * km + ' €');
        break;
    }
    default:
        alert('Veuillez choisir un vehicule proposé dans la liste');
}
