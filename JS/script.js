// MAIL
const emailList = ["gugmarra@gmail.com", "pincopallino@gmail.com", "marcoRossi85@gmail.com"];

const emailUser = prompt("Inserisci email");
let message;

for(let i = 0; i < emailList.length; i++){

    if(emailUser === emailList[i]){
        message = "L'email è corretta. BENVENUTO" ;
    }else{
        message = "!L'email inserita non è corretta!"
    }
    
}

console.log(message);