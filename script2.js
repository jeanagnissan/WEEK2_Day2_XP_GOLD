
let userNote = prompt("Entré une note?");
let convuserNote = parseInt(userNote);

if(convuserNote > 90){
    console.log("A");
}else if(convuserNote >= 80 && convuserNote <= 90){
    console.log("B");
}else if(convuserNote >= 70 && convuserNote <= 80){
    console.log("C");
}else if(convuserNote < 70){
    console.log("D");
}


