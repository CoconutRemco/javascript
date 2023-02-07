let bestellijst = ["fris", "bier", "wijn"]
let bestellingdict = {};
let repeat = true;
let repeatmeerbestellen = true;
let bestellingvar = "";
while (repeatmeerbestellen == true);{
while (repeat == true){
    bestellingvar = bestelling();
if (bestellingscontrole(bestellingvar) ==  true){
    let aantal = aantalbestelling(bestellingvar);
    if (aantalcheck(aantal) == true);{
    bestellingdict[bestellingvar] = aantal;}
    repeat = "False";
    let meerbestellen = prompt("Wilt u nog meer bestellen?").toLowerCase();
    if (meerbestellen == "ja"){
        repeatmeerbestellen = true;}
    else{
        repeatmeerbestellen = false;}
    }
else{
    alert("U kunt alleen fris, bier of wijn bestellen.")
    repeat = false;}}}

function welkom(){
    alert("Welkom bij de Horeca App");
}
function bestelling(){
    let bestelling = prompt("Wat wilt u bestellen?" + bestellijst).toLowerCase();
    return bestelling;
}
function bestellingscontrole(bestelling){
    if (bestellijst.includes(bestelling) ==  true){
        return true;
    }
    else{
        return false;
    }
}

function aantalbestelling(bestelling){
    let aantal = prompt("Hoeveel " + bestelling + " wilt u bestellen?");
    return aantal;
}

function bestellingen(bestelling, aantal){
    bestellingdict[bestelling] = aantal;
}

function aantalcheck(aantal){
    if (aantal <= 0){
        alert("U moet minimaal 1 bestellen");
        aantalbestelling(bestellingvar)
    }
    else{
        return true;
    }
}