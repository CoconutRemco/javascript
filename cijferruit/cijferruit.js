let aantal = prompt("Welk cijfer wil je voor je cijferruit?");
let numberlist = "";   
let numberlist2 = ""; 
for (let i = 1; i <= aantal; i++){
    let number = i;
    numberlist += number;
    console.log(numberlist)
    document.getElementById("antwoord").innerText += numberlist+ '\n';
    if (i == aantal){
    numberlist += "";}
    else{
    numberlist += "-";}}
numberlist2=numberlist;
for (let i = aantal; i>= 1; i--){
    numberlist2 = numberlist2.replace(i,'');
    numberlist3 = reverseString(numberlist2);
    numberlist2 = numberlist3.replace('-','');
    numberlist2 = reverseString(numberlist2);
    document.getElementById("antwoord").innerText += numberlist2+ '\n';}
function reverseString(str) {
    return str.split("").reverse().join("");
}
