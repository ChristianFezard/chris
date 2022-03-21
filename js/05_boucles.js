//boucles FOR
for(let i = 0; i<3; i+=1){
    console.log('Boucle : ' + i);
}

//parcourir un tableau
let tab = ['Pommes', 'Fraises', 'Poires', 'Bananes'];

console.log('--For--');
for(let i = 0; i < tab.length; i+=1){
    console.log(tab[i]);
}

//Boucle While
console.log('--While--');
let j = 0;
while(j< tab.length){
    console.log(tab[j]);
    j+=1;
}

//Boucle Do While
console.log('--Do While--');
let k = 0;
do{
    console.log(tab[k]);
    k+=1;
} while (k < tab.length);

//Boucle for...in permet iterer sur les cles d'un objet
let voiture = { marque: 'peugeot', moteur: 'essence'};

for(let k in voiture){
    console.log(k);
}

//Boucle for...of permet d'itérer sur les valeurs d'un tableau
let tab2 = ['bleu', 'blanc', 'rouge'];

for(let v of tab2){
    console.log(v);
}