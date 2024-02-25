
const btnControl = document.getElementById("btn-control");
const btnControl2 = document.getElementById("btn-control2");

// MAIL
btnControl.addEventListener('click', function(){
    
    
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
        Mi dispiace ma l'email ${emailUser} non è valida
        `;
    }
    
    resultEmail.classList.remove("d-none");
    
})



// GIOCO DADI
btnControl2.addEventListener('click', function(){
    const resultDadi = document.querySelector(".result-dadi");
    const resultWin = document.querySelector(".result-dadi-win");
    
    const userList = [1, 2, 3, 4, 5, 6];
    const pcList = [1, 2, 3, 4, 5, 6];
    
    const numUser = Math.ceil(Math.random() * userList.length);
    const numPc = Math.ceil(Math.random() * pcList.length);
    
    resultDadi.innerHTML = `
    Il giocatore ha pescato ${numUser} <br> Il PC ha pescato ${numPc}
    `;
    
    if(numUser > numPc){
        resultWin.innerHTML = "Il vincitore è il GIOCATORE";
    }else if(numUser < numPc){
        resultWin.innerHTML = "Il vincitore è il PC";
    }else{
        resultWin.innerHTML = "I numeri sono uguali, PARITÀ";
    }

    resultDadi.classList.remove("d-none");
    resultWin.classList.remove("d-none");
    
})