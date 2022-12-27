/*
1. Chiedi all'utente la sua email
2. Creare una lista 
3. Controlla che sia nella lista di chi può accedere
4. Stampa un messaggio appropriato sull'esito del controllo
*/


const mail = prompt("inserisci mail");
console.log(mail);

let emaiList=["aaa",
"bbb",
"ccc",
"ddd",
"eee",
"fff"
];
if (mail.length >= 3 && mail.length <= 20){
    let message = " non puoi entrare";

    for( let x = 0; x < emaiList.length; x++){
        console.log("emaiList[x]" , emaiList[x], typeof emaiList[x]);
    
        if(mail == emaiList[x]){
            message = "puoi entrare"
            
        }
    
    }
    console.log(message);

}
else{
    console.log("email non valida")
}