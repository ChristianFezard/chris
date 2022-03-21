const QUESTIONS = [
    {
        question:
            'A quel compositeur est consacré le film Amadeus ?\n1. Beethoven\n2. Mozart',
        reponse: 2    
    },
    {
        question:
            "Quelle est la capital de l'Autriche ?\n1. Vienne\n2. Oslo",
        reponse: 1    
    },
    {
        question:
            'Quel organe est perturbé par les acouphènes ?\n1. Les Pieds\n2. Les Oreilles',
        reponse: 2    
    }
];

let nbBonneReponse = 0;

for (let i = 0; i < QUESTIONS.length; i += 1){
    let repUtilisateur = prompt(QUESTIONS[i].question);
    if(repUtilisateur == QUESTIONS[i].reponse){
        alert('Bonne réponse!');
        nbBonneReponse += 1;
    }else{
        alert('Mauvaise réponse...');
    }
}

if(nbBonneReponse <= 1){
    alert(`Vous avez ${nbBonneReponse} bonne réponse sur ${QUESTIONS.length}`); 
}else{
    alert(`Vous avez ${nbBonneReponse} bonnes réponses sur ${QUESTIONS.length}`);
}