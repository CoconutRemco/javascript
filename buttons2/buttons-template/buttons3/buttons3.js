let buttonclickdict = {};

function hoeveel() {
  repeat = true;
  while (repeat == true) {
    let hoeveel = prompt("Hoeveel buttons wil je?");
    hoeveel = +hoeveel + +1;
    if (hoeveel >= 1 && hoeveel <= 31) {
      repeat = false;
      return hoeveel;
    } else {
      alert("Je moet minimaal 1 en maximaal 30 buttons maken");
      repeat = true;
    }
  }
}
hoeveelbuttons = hoeveel();
function buttonClick(buttonId) {
  buttonclickdict[buttonId] = buttonclickdict[buttonId] + 1 || 1;
  if (buttonclickdict[buttonId] == "1") {
    document.getElementById("button" + buttonId).style.backgroundColor = "red";
  } else if (buttonclickdict[buttonId] == "2") {
    document.getElementById("button" + buttonId).style.backgroundColor =
      "purple";
  } else if (buttonclickdict[buttonId] == "3") {
    document.getElementById("button" + buttonId).style.backgroundColor = "blue";
  } else if (buttonclickdict[buttonId] == "4") {
    document.getElementById("button" + buttonId).style.backgroundColor =
      "black";
  } else if (buttonclickdict[buttonId] == "5") {
    document.getElementById("button" + buttonId).remove();
  }
}

for (let i = 1; i < hoeveelbuttons; i++) {
  document.write(
    '<button id="button' +
      i +
      '" onclick="buttonClick(' +
      i +
      ')">Button ' +
      i +
      "</button>"
  );
}
