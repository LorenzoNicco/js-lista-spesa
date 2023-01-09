/*
    STEPS:
        1. Scrivere la lista della spesa in un array
        2. Inizializzare la variabile di riferimento per il ciclo.
        3. Scrivere il ciclo while
            3a. All'interno del ciclo, scrivere il comando che inserirà gli elementi della lista nel documento
*/

const myList = [
    "pane",
    "acqua",
    "verdura",
    "pesce",
    "carne",
    "lievito",
    "farina",
    "zucchero"
];

let i = 0;

const itemsList = document.getElementById("items");

while (i < myList.length) {
    // document.writeln(myList[i] + "<br>");
    // console.log("lista", myList[i]);

    // let newLi = document.createElement("li");
    // newLi.innerHTML = myList[i];
    // itemsList.append(newLi);
    // console.log("lista", myList[i]);

    itemsList.innerHTML += `<li>${myList[i]}</li>`;
    console.log("lista", myList[i]);

    i++;
}