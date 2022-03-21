
//Récupération de la classe modal-container
const MODALCONTAINER = document.querySelector(".modal-container");

//Récupération de toutes les classes modal-trigger
const MODALTRIGGERS = document.querySelectorAll(".modal-trigger");

//for each = pour chaque declencheur

MODALTRIGGERS.forEach(trigger => trigger.addEventListener("click", toggleModal))
//function toggleModal

function toggleModal(){
    MODALCONTAINER.classList.toggle("active")
}