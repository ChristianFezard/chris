//ecoute events + click + function anonyme
// selectionner toutes les lignes du tableau
let tabTr = document.querySelectorAll('tbody tr');
//ajout d'un ecouteur d'evenement au clique sur toutes les lignes
for(let tr of tabTr){
    tr.addEventListener('click', function(){
        this.classList.toggle('gris');  
    });
}

document.querySelector('a').addEventListener('click', function(event){
    event.preventDefault();
    console.log('texte');
    let target = this.getAttribute('href');
    let response = confirm('Voulez-vous partir du site ?');
    if(response == true){
        window.location = target; // redirection
    }else{
        alert('Merci de rester avec nous');
    }
});



