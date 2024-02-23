// MAIL
const emailList = ["gugmarra@gmail.com", "pincopallino@gmail.com", "marcoRossi85@gmail.com", "gianfrancobiscotto@gmail.com", "luigibello@gmail.com"];

const emailUser = prompt("Inserisci email");
let message;
let check;

for(let i = 0; i < emailList.length; i++){

    if(emailUser === emailList[i]){
        check = true;
    }else{
        ckech = false;
    }

}
if(check === true){
    console.log("tutto ok");
}else{
    console.log("sbagliata");
}




// GIOCO DEI DADI

// const userList = [1, 2, 3, 4, 5, 6];
// const userPc = [1, 2, 3, 4, 5, 6];

// const numuser = rand
