//Variabelen
let bestellijst = ["fris", "bier", "wijn"];
let repeat = true;
let bestellingsdict = {};
let bestellingdict = {};
let aantalbestellingvar = 0; 
const BIERPRIJS = 2.50;
const FRISPRIJS = 1.50;
const WIJNPRIJS = 5.00;
//Flow
welkom();
while (repeat == true){
let bestellingvar = bestelling();
let bestellingcontrolevar = bestellingscontrole(bestellingvar);
if (bestellingcontrolevar == true){
    repeat = false;
    aantalbestellingvar = aantalbestelling(bestellingvar);
    bestellingsdict = bestellingen(bestellingvar, aantalbestellingvar);}
else{
    alert("U kunt alleen fris, bier of wijn bestellen.")
    repeat = true;}
if (meerbestellen() == true){
    repeat = true;}
else{
    repeat = false;}}
bonnetje(bestellingsdict);

//Functions
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
    let repeat = true;
    while (repeat == true){
    let aantal = prompt("Hoeveel " + bestelling + " wilt u bestellen?");
    if (aantal >=1){
        repeat = false;
        return aantal;}
    else{
        alert("U moet minimaal 1 bestellen");
        repeat = true;}}}


function bestellingen(bestelling, aantal){
    if (bestelling in bestellingdict){
    let aantalbegin= bestellingdict[bestelling];
    let aantaltotaal = +aantalbegin + +aantal;
    bestellingdict[bestelling] = aantaltotaal;
    }
    else{
    bestellingdict[bestelling] = aantal;}
    return bestellingdict;
}

function meerbestellen(){
    let repeat = true;
    while (repeat == true){
    let meerbestellen = prompt("Wilt u nog meer bestellen?").toLowerCase();
    if (meerbestellen == "ja"){
        repeat = false;
        return true;}
    else if (meerbestellen == "nee"){
        repeat = false;
        return false;}
    else{
        alert("U kunt alleen ja of nee invullen.");
        repeat = true;}}}

function bonnetje(bestellingdict){
    let totaalprijs = 0;
    bonnetjetext = "-=-=-=-=-=-=-=-=-=-=-=-Bonnetje-=-=-=-=-=-=-=-=-=-=-=-";
    document.getElementById("antwoord").innerText += bonnetjetext+ '\n';
    for (let bestelling in bestellingdict){
        let bonnetje = "";
        let aantal = bestellingdict[bestelling];
        let prijs = 0;
        if (bestelling == "fris"){
            prijstotaal = FRISPRIJS * aantal;
            prijs = FRISPRIJS;}
        else if (bestelling == "bier"){
            prijstotaal = BIERPRIJS * aantal;
            prijs = BIERPRIJS;}
        else if (bestelling == "wijn"){
            prijstotaal = WIJNPRIJS * aantal;
            prijs = WIJNPRIJS;}
        totaalprijs += prijstotaal;
        totaalprijstext = "Totaalprijs: €" + totaalprijs;
        bonnetje += bestelling + " " + aantal + " x " + prijs+ " = €" +prijstotaal;
        document.getElementById("antwoord").innerText += bonnetje+ '\n';}
        document.getElementById("antwoord").innerText += totaalprijstext+ '\n';
        document.getElementById("antwoord").innerText += bonnetjetext+ '\n';}



