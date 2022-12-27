const userNumber = Math.floor(Math.random() * 6 + 1);
const pcNumber = Math.floor(Math.random() * 6 + 1);
console.log("userNamber" , userNumber , typeof userNumber);
console.log("pcNamber" , pcNumber , typeof pcNumber);
if(userNumber > pcNumber){
    console.log("utente vince ocn numero", userNumber);
}
else if(userNumber < pcNumber){
    console.log("pc vince ocn numero", pcNumber);
}
else{
    console.log("pareggio con nr", userNumber);
}