'use strict';
// dicchiarto le variabili e array con le email registrate precedentemente. 
let btn_input = document.getElementById('submit');
let email = ['esempio@boolean.it', 'fabrizio@boolean.it', 'enrico@boolean.it', 'davide@boolean.it', 'jacopo@boolean.it', 'eugeniu@boolean.it']
console.log(email)

btn_input.addEventListener('click', function(){
    
    let user_email = document.getElementById('user_email').value;
    
    console.log(user_email);

})


