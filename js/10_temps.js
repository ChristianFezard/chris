// setIterval s'inscrit toutes les 1000 millisecondes
/*window.setInterval(function(){
    console.log('setInterval')
},1000);

//setTimout s'inscrit APRES 1 sec.
window.setTimeout(function(){
    console.log('setTimeout')
},1000);*/

//Horloge
// date

const horloge = function(){
let date = new Date();

//heure, minutes, secondes
let heures = date.getHours();
let minutes = date.getMinutes();
let secondes = date.getSeconds();

if(secondes < 10){
    secondes = "0" + secondes;
}

if(minutes < 10){
    minutes = "0" + minutes;
}

let affichage = heures + ":" + minutes + ":" + secondes;

document.querySelector('#horloge').innerText = affichage;
};

setInterval(horloge, 1000);




