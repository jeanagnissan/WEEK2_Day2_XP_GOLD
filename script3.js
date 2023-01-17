

/* 
Demander à l'utilisateur une chaîne. Ce doit être un verbe.
Si la longueur de la chaîne est d'au moins 3 et que la chaîne ne se termine pas par « ing », ajoutez « ing » à la fin de la chaîne.
Si la longueur de la chaîne est d'au moins 3 et que la chaîne se termine par "ing", ajoutez "ly" à sa fin.
Si la longueur de la chaîne est inférieure à 3, laissez-la inchangée.
*/


let userString = prompt("Entré un texte cour");
let convUserLang = userString.toLowerCase();

let positI = convUserLang.length - 3;
// let positN = convUserLang.length - 2;
// let positG = convUserLang.length - 1;

let stringFinish = convUserLang.substr(positI);;

if( !parseFloat(convUserLang) ) {
    if (convUserLang.length >= 3) {
        if (stringFinish == "ing") {
            alert(`${convUserLang}ly`);
        } else{
            alert(`${convUserLang}ing`);
        }
    } else {
        alert(convUserLang);
    }
}
