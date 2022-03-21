/*let prenom = 'chistian';
let regExp = new RegExp('a')

//test expression reguliere "y a-t-il un a dans la variable prenom"
console.log(/b/.test(prenom));
console.log(regExp.test(prenom));*/

//formulaires
let form = document.querySelector('#loginForm');

// ecoute la modification de l'email
form.email.addEventListener('change', function(){
    VALIDEMAIL(this);
});

// ecouter la modification du Password

form.password.addEventListener('change', function(){
    VALIDEPASSWORD(this);
});

// ecouter la soumission du formulaire

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(VALIDEMAIL(form.email) && VALIDEPASSWORD(form.password)) {
        form.submit();
    }
});


const VALIDEMAIL = function(inputEmail) {
    // creation RegExp mail
    let emailRegExp = RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
    );
    // recuparation balise small
    let small = inputEmail.nextElementSibling;
    // test expression reguliere
    if(emailRegExp.test(inputEmail.value)) {
        small.innerHTML = 'Adresse valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }else{
        small.innerHTML = 'Adresse Non Valide';
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
}; 

const VALIDEPASSWORD = function(inputPassword) {
    let msg;
    let valid = false;
    //au moins 3 caractères
    if (inputPassword.value.length < 3) {
        msg = 'Le mot de passe doit contenir au moins 3 caractères';
    }
    //au moins 1 majuscule
    else if (!/[A-Z]/.test(inputPassword.value)) {
        msg = 'Le mot de passe doit contenir au moins 1 majuscule';
    }
    //au moins 1 minuscule
    else if (!/[a-z]/.test(inputPassword.value)) {
        msg = 'Le mot de passe doit contenir au moins 1 miniscule';
    }
    //au moins 1 chiffre
    else if (!/[0-9]/.test(inputPassword.value)) {
        msg = 'Le mot de passe doit contenir au moins 1 chiffre';
    }
    //mot de passe valide
    else{
        msg = 'Le mot de passe est valide'
        valid = true;
    }
    //Affichage
    // recuparation balise small
    let small = inputPassword.nextElementSibling;
    // test expression reguliere
    if(valid) {
        small.innerHTML = 'Mot de passe valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }else{
        small.innerHTML = msg;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return true;
    }
};
