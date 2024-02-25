const btnControl = document.getElementById("btn-control");

btnControl.addEventListener('click', function(){
    
    // MAIL
    const emailList = ["gugmarra@gmail.com", "pincopallino@gmail.com", "marcoRossi85@gmail.com", "gianfrancobiscotto@gmail.com", "luigibello@gmail.com"];
    
    const emailUser = document.getElementById("email").value;
    const resultEmail = document.querySelector(".result-email");
    let mailFound = false;
    
    for(let i = 0; i < emailList.length; i++){
        
        if(emailUser === emailList[i]){
            mailFound = true;
            // stoppo il ciclo
            i = emailList.length;
        }
    }
    // in base all'esito del ciclo stampo il risultato
    if(mailFound){
        resultEmail.innerHTML =`
        L'email ${emailUser} è valida. BENVENUTO
        `;
    }else{
        resultEmail.innerHTML = `
        Mi dispiace ma'email ${emailUser} non è valida
        `;
    }
    
    resultEmail.classList.remove("d-none");
    
})



// GIOCO DEI DADI

// const userList = [1, 2, 3, 4, 5, 6];
// const pcList = [1, 2, 3, 4, 5, 6];

// const numuser = Math.ceil(Math.random() * userList.length);

// const numPc = Math.ceil(Math.random() * pcList.length);

// console.log("Il giocatore ha pescato " + numuser);
// console.log("Il PC ha pescato " + numPc);

// if(numuser > numPc){
//     console.log("Il vincitore è il giocatore");
// }else if(numuser < numPc){
//     console.log("Il vincitore è il PC");
// }else{
//     console.log("I numeri pescati sono uguali: PARITÀ");
// }