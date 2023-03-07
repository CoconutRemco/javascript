let partijen = [];
let votes = {};
let container = document.getElementById("container");
let partijCount = 0;
let test = document.createTextNode('Aantal partijen: ' + partijen.length);

let box = document.createElement("div");
box.id = "box";
box.style.fontSize = "25px";
container.appendChild(box);
box.appendChild(test);

alert("Welkom bij de verkiezingen! Voeg hieronder een partij toe om te beginnen met stemmen. Type 'klaar of  'stop' om te stoppen met stemmen.")


function showVotes() {
    let winnaar = "";
    let winnaarVotes = 0;
    let dubbelepartijen = 0;
    for (let i = 0; i < partijen.length; i++) {
        winnaarVotes = votes[partijen[i]];
        if (votes[partijen[i]] > winnaarVotes) {
            winnaar = "De winnaar is " + partijen[i] + " met " + winnaarVotes + " stemmen!";}
        else if (votes[partijen[i]] === winnaarVotes) {
            dubbelepartijen += 1;
            winnaar = "Er is geen winnaar, " + dubbelepartijen + "partijen " +" hebben evenveel stemmen!";
        }}
    container.removeChild(box)
    container.removeChild(klaar);
    for (let i = 0; i < partijen.length; i++) {
        container.removeChild(document.getElementById("knop" + i));
    }
    let element = document.createElement('h2')
    for (let i = 0; i < partijen.length; i++) {
        let node = document.createTextNode(partijen[i] + ": " + votes[partijen[i]]);
        element.appendChild(node);
        element.appendChild(document.createElement('br'));
        container.appendChild(element);
    }
    let winnaarElement = document.createElement('h2');
    let winnaarNode = document.createTextNode(winnaar);
    winnaarElement.appendChild(winnaarNode);
    container.appendChild(winnaarElement);


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
                votes[partijen[j]] = 0;
            }
            knop.onclick = function () {
                alert("U heeft gestemd op " + partijen[i]);
                votes[partijen[i]] += 1;

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
        if (partijen.length >= 0  && document.getElementById("invoer").value != "klaar" && document.getElementById("invoer").value != "stop") {
            alert("Voeg eerst een partij toe!");
            partijCount--;
        } else {
            alert("Stemmen is gesloten!");
            stemmen();
        }
    }

    if (document.getElementById("invoer").value === "" || document.getElementById("invoer").value === " ") {
        alert("Vul een partijnaam in!");
        if (partijCount === 0) {
            partijCount--;
        } else {
        }
    }

    if (partijen.includes(document.getElementById("invoer").value.toLowerCase())) {
        alert("Deze partij bestaat al!");
        partijen.pop();
        if (partijCount === 0) {
            partijCount--;
        } else {

        }
    }

    let partij = document.getElementById("invoer").value;
    if (document.getElementById("invoer").value === "" || document.getElementById("invoer").value === " ") {
    } else if (document.getElementById("invoer").value === "klaar" || document.getElementById("invoer").value === "stop") {
    }
    else {
        partijen.push(partij);
    }
    document.getElementById("invoer").value = "";
    partijCount++;


    test = document.createTextNode('Aantal partijen: ' + partijen.length);

    box.appendChild(test);


}


container.appendChild(invoer);
container.appendChild(toevoegen);