'use strict';

let play = document.getElementById('btn').addEventListener('click',  function(){
    
    let player = Math.floor(Math.random() * 6 + 1);
    
    let computer = Math.floor(Math.random() * 6 + 1);
    
    if (player < computer){
        document.getElementById('result').innerHTML = `<p>Il Tuo risultato:${player}</p>
                                                       <p>Opponente: ${computer}</p> 
                                                       <p>Sconfitta, ritenta..magari ti va meglio.</p>`
    }
    else if (player == computer){
        document.getElementById('result').innerHTML =  `<p>Il Tuo risultato:${player}</p>
                                                        <p>Opponente: ${computer}</p> 
                                                        <p>Hai pareggiato, 1 possibilita su 1000.</p>`
    }
    else {
        document.getElementById('result').innerHTML =  `<p>Il Tuo risultato:${player}</p>
                                                        <p>Opponente: ${computer}</p> 
                                                        <p>Vittoria!</p>`
    }
})