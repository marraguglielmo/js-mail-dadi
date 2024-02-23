// MAIL
const emailList = ["gugmarra@gmail.com", "pincopallino@gmail.com", "marcoRossi85@gmail.com", "gianfrancobiscotto@gmail.com", "luigibello@gmail.com"];

const emailUser = prompt("Inserisci email");
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
    console.log("tutto ok");
}else{
    console.log("sbagliata");
}



// GIOCO DEI DADI

// const userList = [1, 2, 3, 4, 5, 6];
// const pcList = [1, 2, 3, 4, 5, 6];

// const numuser = Math.ceil(Math.random() * userList.length);
// console.log(numuser);

// const numPc = Math.ceil(Math.random() * pcList.length);
// console.log(numPc);

// if(numuser > numPc){
//     console.log("Il vincitore è " + userList);
// }else if(numuser < numPc){
//     console.log("Il vincitore è " + userList);
    
// }