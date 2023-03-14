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
    let geenwinnar = Object.keys(votes).filter(x => { return votes[x] === 0 });
    let winnaar = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
    let meerderewinaar = Object.keys(votes).filter(x => { return votes[x] === votes[winnaar] });
    if (geenwinnar.length === partijen.length) {
        let node = document.createTextNode("Geen winnaar")
        element.appendChild(node);
        container.appendChild(element);
    }
    else if (meerderewinaar.length === 1) {
        let winnaarElement = document.createElement('h2')
        let winnaarNode = document.createTextNode('De winnaar is: ' + winnaar);
        winnaarElement.appendChild(winnaarNode);
        container.appendChild(winnaarElement);
    } else if (meerderewinaar.length > 1){            
        let winnaarElement = document.createElement('h2')
        let winnaarNode = document.createTextNode('De winnaars zijn: ' + meerderewinaar);
        winnaarElement.appendChild(winnaarNode);
        container.appendChild(winnaarElement);
    }
    if (meerderewinaar.length === 0) {
    let winnaarElement = document.createElement('h2')
    let winnaarNode = document.createTextNode("De winnaar is: " + winnaar);
    winnaarElement.appendChild(winnaarNode);
    container.appendChild(winnaarElement);}
    


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
                votes[partijen[i]] += 1	;

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

    let partij = document.getElementById("invoer").value;
    if (partij === "" || partij === " ") {
        test = document.createTextNode('Aantal partijen: ' + partijen.length);
        box.appendChild(test);
        alert("Voer een partijnaam in!");
        document.getElementById("invoer").value = "";

    } else if (partij === "klaar" || partij === "stop") {

        if (partijCount === 0) {
            alert("Voeg eerst een partij toe!");
            test = document.createTextNode('Aantal partijen: ' + partijen.length);
            box.appendChild(test);
            document.getElementById("invoer").value = "";

            partijCount--;

        } else {
            stemmen();
        }

    } else if (partijen.includes(partij.toLowerCase())) {
        alert("Deze partij is al toegevoegd!");
        test = document.createTextNode('Aantal partijen: ' + partijen.length);
        box.appendChild(test);
        document.getElementById("invoer").value = "";

    } else {
        partijen.push(partij);

        test = document.createTextNode('Aantal partijen: ' + partijen.length);

        box.appendChild(test);
        document.getElementById("invoer").value = "";
        partijCount++;
    }


}


container.appendChild(invoer);
container.appendChild(toevoegen);