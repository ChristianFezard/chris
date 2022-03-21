function main() {
//Déclaration de variable + affection 

let prenom = 'Christian';// string

let age = 37;//number

let enLigne = true;//boolean

let choix = null;//Null

console.log(typeof prenom);
console.log(typeof age);
console.log(typeof enLigne);
console.log(typeof choix);
console.log(typeof ville);//Undefined

//concaténation
// console.log(prenom + ' ' + age + ' ans');
// console.log(`Je m'appelle ${prenom}, j'ai ${age} ans`);
concateneation(prenom, age);

//echapper un caractère grace a antislash
console.log('il fait beau aujourd\'hui');

age = 20;
console.log(`Je m'appelle ${prenom}, j'ai ${age} ans`);

//constante valeur non modifiable
const VILLE = 'Le Chesnay';


//Array valeur entre crochet/bracket
let tab = ['Pommes', 30 , true, ['bleu', 'rouge']];
//grandeur du tableau
console.log(tab.length);
//index 1
console.log(tab[1]);
//recuperer mot tableau dans un tableau
console.log(tab[3][1]);

//Object clef + valeur
let personne = {
    prenom: 'Christian',
    age: 37,
    adresse: {
        rue: '3 rue de la ferme',
        ville: 'Le Chesnay'
    }
};
//ecriture en point doted notation
console.log(personne.prenom);
console.log(personne['prenom']);
console.log(personne.adresse.rue);

//calcul mathematique

let a = 5;
let b = 2;

//addition
console.log(a + b);
//soustraction
console.log(a - b);
//multiplication
console.log(a * b);
//division
console.log(a / b);
//modulo 1=impair 0=pair
console.log(a % b);

//incrementer
a += 1; // ++ equivaut a +=
console.log(a);

//decrementer
b -= 1; // -- equivaut a +=
console.log(b);
}

function concateneation(prenom, age) {
    console.log(prenom + ' ' + age + ' ans');
    console.log(`Je m'appelle ${prenom}, j'ai ${age} ans`);
}