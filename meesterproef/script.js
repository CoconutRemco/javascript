let partijen = [];
let votes = {};
let container = document.getElementById("container");
let partijCount = 0;
let test = document.createTextNode('Aantal partijen: ' + partijCount);

let box = document.createElement("div");
box.id = "box";
box.style.fontSize = "25px";
container.appendChild(box);
box.appendChild(test);

alert("Welkom bij de verkiezingen! Voeg hieronder een partij toe om te beginnen met stemmen. Type 'klaar of  'stop' om te stoppen met stemmen.")


function showVotes() {
    container.removeChild(box)
    container.removeChild(klaar);
    for (let i = 0; i < partijen.length; i++) {
        container.removeChild(document.getElementById("knop" + i));}
    element = document.createElement('h2')
    for (let i = 0; i < partijen.length; i++){
        node = document.createTextNode(partijen[i] + ": " + votes[partijen[i]]);
        element.appendChild(node);
        element.appendChild(document.createElement('br'));
        container.appendChild(element);
    }


}

function stemmen() {
    container.removeChild(invoer);
    container.removeChild(toevoegen);
    for (let i = 0; i < partijen.length; i++) {
        if (partijen[i] === '' || partijen[i] === 'klaar' || partijen[i] === 'stop') {

        } else {
            let knop = document.createElement("button");
            knop.id = "knop" + i;
            knop.innerHTML = partijen[i];
            for (let j = 0; j < partijen.length; j++) {
                votes[partijen[j]] = 0;}
            knop.onclick = function () {
                alert("U heeft gestemd op " + partijen[i]);
                votes[partijen[i]] = +i+1;

            }

            container.appendChild(knop);

        }
    }
    let klaar = document.createElement("button");
    klaar.id = "klaar";
    klaar.innerHTML = "Klaar";
    klaar.onclick = function () {
        alert("Bedankt voor het stemmen!");
        showVotes();
    }
    container.appendChild(klaar);

}


let invoer = document.createElement("input");
invoer.style.marginTop = "100px";
invoer.type = "text";
invoer.id = "invoer";
invoer.placeholder = "Partijnaam";

let toevoegen = document.createElement("input");

toevoegen.id = "toevoegen";
toevoegen.type = "button";
toevoegen.value = "Voeg toe";

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        toevoegen.click();
    }
});

toevoegen.onclick = function () {
    box.removeChild(test);
    if (document.getElementById("invoer").value === "klaar" || document.getElementById("invoer").value === "stop") {
        if (partijen.length === 0) {
            alert("Voeg eerst een partij toe!");
            partijCount--;
        } else {
            alert("Stemmen is gesloten!");
            stemmen();
        }
    }

    if (document.getElementById("invoer").value === "") {
        alert("Vul een partijnaam in!");
        partijCount--;
    }

    if (partijen.includes(document.getElementById("invoer").value)) {
        alert("Deze partij bestaat al!");
        partijen.pop();
        partijCount--;
    }

    let partij = document.getElementById("invoer").value;
    partijen.push(partij);
    document.getElementById("invoer").value = "";
    partijCount++;


    test = document.createTextNode('Aantal partijen: ' + partijCount);

    box.appendChild(test);


}


container.appendChild(invoer);
container.appendChild(toevoegen);


