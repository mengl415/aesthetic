function cottagePage() {
  window.open("cottageCore.html", "_blank");
}

function darkAcaPage() {
  window.open("darkAca.html", "_blank");
}

function devilPage() {
  window.open("devilCore.html", "_blank");
}

function eGirlPage() {
  window.open("eGirl.html", "_blank");
}

function eGirlPage() {
  window.open("eGirl.html", "_blank");
}

function fairyPage() {
  window.open("fairyCore.html", "_blank");
}

function loFiPage() {
  window.open("loFi.html", "_blank");
}

function moriKeiPage() {
  window.open("moriKei.html", "_blank");
}

function spacePage() {
  window.open("spaceCore.html", "_blank");
}

function vaporwavePage() {
  window.open("vaporwave.html", "_blank");
}

function homePage() {
  window.open("index.html", "_blank");
}

//array of colors
var ccArray = [
  "#EDC726",
  "#8B5B2B",
  "#EBD2B7",
  "#E9DF96",
  "#D18B89",
  "#FEEAC5",
  "#844638",
  "#9C774C",
  "#878326",
];

var daArray = [
  "#533c2c",
  "#ac9d8a",
  "#383222",
  "#b4aca9",
  "#645a4e",
  "#1f261f",
  "#3a1e19",
  "#685d57",
  "#211f20",
];

var dcArray = [
  "#ff4000",
  "#8f1a19",
  "#ff5956",
  "#dd5d50",
  "#ed6567",
  "#c00202",
  "#c6181e",
  "#7e261c",
  "#b73b43",
];

var egArray = [
  "#b112db",
  "#424244",
  "#c56b84",
  "#828896",
  "#88e1e7",
  "#fd85c4",
  "#cc98a5",
  "#bba6c7",
  "#ca04e0",
];

var fcArray = [
  "#e2d6ab",
  "#c894ab",
  "#deddbe",
  "#b9ce8b",
  "#edc6a9",
  "#bf9cad",
  "#fefdcf",
  "#f1e5e9",
  "#adbec5",
];

var lfArray = [
  "#fa76b2",
  "#2758d1",
  "#df7545",
  "#597ca2",
  "#46b87a",
  "#c791cb",
  "#fc0f9f",
  "#f19eb0",
  "#39acc1",
];

var mkArray = [
  "#a66859",
  "#dd9a77",
  "#817c69",
  "#f5b247",
  "#d5b69e",
  "#a68a6f",
  "#868b55",
  "#7f6d63",
  "#405e1d",
];

var scArray = [
  "#e13860",
  "#1948b2",
  "#57abb9",
  "#131b25",
  "#0e1bc1",
  "#2c1934",
  "#6b69a0",
  "#e85c3b",
  "#5a988b",
];

var vArray = [
  "#671fcd",
  "#08f7f2",
  "#dd4778",
  "#8f6ca6",
  "#353dbe",
  "#feb6dc",
  "#2b7d88",
  "#cf7bf7",
  "#877bdf",
];

//create variables for each rectangle
var r1 = document.getElementById("rect1");
var r2 = document.getElementById("rect2");
var r3 = document.getElementById("rect3");
var r4 = document.getElementById("rect4");
var r5 = document.getElementById("rect5");
var r6 = document.getElementById("rect6");
var r7 = document.getElementById("rect7");

//array of rectangles
var rectArray = [r1, r2, r3, r4, r5, r6, r7];

//random color from array of colors
var ccColor = ccArray[Math.floor(Math.random() * 9)];
console.log(ccColor);

var daColor = daArray[Math.floor(Math.random() * 9)];
console.log(daColor);

//random index for array of rectangles
var ccRectIndex = Math.floor(Math.random() * 7);
console.log(ccRectIndex);

var daRectIndex = Math.floor(Math.random() * 7);
console.log(daRectIndex);

//create function that changes the background color, shadow, and displays it
function ccRectColor() {
  //call rectangle with randomized index
  var newccRect = rectArray[ccRectIndex];
  newccRect.style.backgroundColor = ccColor;
  newccRect.style.boxShadow = "0 0 50px 50px" + ccColor;
  newccRect.style.display = "block";
}

function daRectColor() {
  var newdaRect = rectArray[daRectIndex];
  newdaRect.style.backgroundColor = daColor;
  newdaRect.style.boxShadow = "0 0 50px 50px" + daColor;
  newdaRect.style.display = "block";
}

//create function that reverts it after mouseout
function ccRectBack() {
  var newccRect = rectArray[ccRectIndex];
  newccRect.style.display = "none";
}

function daRectBack() {
  var newdaRect = rectArray[daRectIndex];
  newdaRect.style.display = "none";
}

//event listener for hover
document.getElementById("cottageCore").addEventListener("mouseover", function () {
    // alert("mouseover")
    ccRectColor();
  });

//event listener for mouseout
document.getElementById("cottageCore").addEventListener("mouseout", function () {
    // alert("mouseout")
    ccRectBack();
  });

document.getElementById("darkA").addEventListener("mouseover", function () {
    // alert("mouseover")
    daRectColor();
  });

document.getElementById("darkA").addEventListener("mouseout", function () {
    // alert("mouseout")
    daRectBack();
  });
