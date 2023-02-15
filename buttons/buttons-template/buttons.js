let count01 = 0;
let count02 = 0;
let count03 = 0;


let buttonnumber = 0;
function knop01() {
    buttonnumber = 1;
    count01++;
    document.getElementById("knop01").innerHTML = count01;
    document.getElementById("img").src = getBGimage();
    document.getElementById("corner").src = getimage();

}
function knop02() {
    buttonnumber = 2;
    count02++;
    document.getElementById("knop02").innerHTML = count02;
    document.getElementById("img").src = getBGimage();
    document.getElementById("corner").src = getimage();
}

function knop03() {
    buttonnumber = 3;
    count03++;
    document.getElementById("knop03").innerHTML = count03;
    document.getElementById("img").src = getBGimage();
    document.getElementById("corner").src = getimage();
}
function getBGimage() {
    if (buttonnumber === 0) {
        image="Images/bg0.jpg"
    }
    else if (buttonnumber === 1) {
        image="Images/bg1.jpg"
    }
    else if (buttonnumber === 2) {
        image="Images/bg2.jpg"
    }
    else if (buttonnumber === 3) {
        image="Images/bg3.jpg"
    }
    return image;
}

function getimage() {
    if (buttonnumber === 0) {
        image="Images/0.jpg"
    }
    else if (buttonnumber === 1) {
        image="Images/1.jpg"
    }
    else if (buttonnumber === 2) {
        image="Images/2.jpg"
    }
    else if (buttonnumber === 3) {
        image="Images/3.jpg"
    }
    return image;
}