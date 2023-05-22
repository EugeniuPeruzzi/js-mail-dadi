'use strict';
// dicchiarto le variabili e array con le email registrate precedentemente. 
let btn_input = document.getElementById('submit');
let email = ['esempio@boolean.it', 'fabrizio@boolean.it', 'enrico@boolean.it', 'davide@boolean.it', 'jacopo@boolean.it', 'eugeniu@boolean.it']
console.log(email)
let flag = false;

// ad event listner dopo il click riceve i dati del utente
btn_input.addEventListener('click', function(){
    
    let user_email = document.getElementById('user_email').value;
    
    console.log(user_email);
    // creiamo un ciclo for per poter selezionare gli array 
    for(let i=0; i<email.length; i++ ){
        console.log(email[i]);
    
        if (email[i].toLowerCase() === user_email.toLowerCase()){
            flag = true;
        };
    };
    // diamo le indicazioni in base a come comportarsi
    if(flag === true) {
        alert('Bentornato nel club delle email registrate');
        console.log(alert)
    }
    else{
        alert('la tua email non e stata registrata');
        console.log(alert)
    }

});


