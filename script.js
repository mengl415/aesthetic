function cottagePage(){
    window.open("cottageCore.html", "_blank");
}

function darkAcaPage(){
    window.open("darkAca.html", "_blank");
}

function devilPage(){
    window.open("devilCore.html", "_blank");
}

function eGirlPage(){
    window.open("eGirl.html", "_blank");
}

function eGirlPage(){
    window.open("eGirl.html", "_blank");
}

function fairyPage(){
    window.open("fairyCore.html", "_blank");
}

function loFiPage(){
    window.open("loFi.html", "_blank");
}

function moriKeiPage(){
    window.open("moriKei.html", "_blank");
}

function spacePage(){
    window.open("spaceCore.html", "_blank");
}

function vaporwavePage(){
    window.open("vaporwave.html", "_blank");
}

function homePage(){
    window.open("index.html", "_blank");
}

var ccArray = [
    "#EDC726", "#8B5B2B", "#EBD2B7", "#E9DF96", "#D18B89", "#FEEAC5",
    "#844638", "#9C774C", "#878326"
];

var r1 = document.getElementById("rect1");
var r2 = document.getElementById("rect2");
var r3 = document.getElementById("rect3");
var r4 = document.getElementById("rect4");
var r5 = document.getElementById("rect5");

var ccRect = [r1, r2, r3, r4, r5];

var ccColor = ccArray[Math.floor(Math.random()*9)];
console.log(ccColor);

var ccRectIndex = Math.floor(Math.random()*5);
console.log(ccRectIndex);

var newRect = ccRect[ccRectIndex];

function ccRectColor(){
    newRect.style.backgroundColor = ccColor;
    newRect.style.display = "none";
}


document.getElementById("cottageCore").addEventListener("mouseover", ccRectColor());



