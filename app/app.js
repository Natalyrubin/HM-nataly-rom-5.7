let root = document.getElementById("root");

//start headline
root.innerHTML = '<h1 id = "headline"> Elazars beloved calculator </h1>';
let headline = document.getElementById("headline");
headline.style.fontSize = "32px";
headline.style.fontFamily = "Cursive";
headline.style.color = "aquamarine";
headline.style.backgroundColor = "black";
headline.style.width = "42%";
headline.style.margin = "auto";
headline.style.marginTop = "20px";
headline.style.textAlign = "center";

//end headline

//start container
root.innerHTML += '<div id = "container"></div>';
let container = document.getElementById("container");
container.style.height = "520px";
container.style.width = "330px";
container.style.backgroundColor = "gold";
container.style.border = "0.5px solid goldenrod";
container.style.borderRadius = "10px";
container.style.marginLeft = "37.5%";
container.style.marginTop = "35px";
//end container

//li'l casio
container.innerHTML += '<span id="casio">CASIO</span>';
let lilCasio = document.getElementById("casio");
lilCasio.style.marginLeft = "5px";
lilCasio.style.fontFamily =
  "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
lilCasio.style.fontWeight = "600";
// end li'l casio

//screen
container.innerHTML += '<div id="screen">0.</div>';
let bigScr = document.getElementById("screen");
bigScr.style.width = "305px";
bigScr.style.height = "70px";
bigScr.style.background = "rgb(170,197,214)";
bigScr.style.background =
  "linear-gradient(360deg, rgba(170,197,214,1) 15%, rgba(230,239,240,1) 35%)";
bigScr.style.margin = "8px";
bigScr.style.display = "flex";
bigScr.style.justifyContent = "end";
bigScr.style.alignItems = "flex-end";
bigScr.style.fontSize = "65px";
bigScr.style.fontFamily = "Cursive";
bigScr.style.fontWeight = "600";
bigScr.style.border = "5px rgb(214, 183, 7) double";
bigScr.style.borderRadius = "10px";
//end screen

//blackscreen
container.innerHTML += '<div id="flblscr"><div id="blackscr"></div></div>';
let flBlkScr = document.getElementById("flblscr");
let blkScr = document.getElementById("blackscr");
//blkscreen flexbox
flBlkScr.style.display = "flex";
flBlkScr.style.justifyContent = "end";
flBlkScr.style.alignItems = "center";
flBlkScr.style.background = "rgb(236,202,1)";
flBlkScr.style.background =
  "linear-gradient(360deg, rgba(236,202,1,1) 30%, rgba(239,205,0,1) 50%)";
flBlkScr.style.border = "0.5px rgb(214, 183, 7) double";
flBlkScr.style.height = "35px";
//end blkscreen flexbox

blkScr.style.marginRight = "7px";
blkScr.style.width = "80px";
blkScr.style.height = "25px";
blkScr.style.backgroundColor = "#433840";
blkScr.style.border = "2px rgb(214, 183, 7) double";
blkScr.style.borderRadius = "5px";
//end black screen

//buttons
container.innerHTML += '<div id = "buttons"></div>';
let buttons = document.getElementById("buttons");
buttons.innerHTML =
  '<div class="button-col1"></div><div class="button-col2"></div><div class="button-col3"></div><div class="button-col4"></div>';

// '<div class = "buttonCol">% V CE ON/C</div><div class = "buttonCol">7 4 1 0</div><div class = "buttonCol">8 5 2 .</div><div class = "buttonCol">9 6 3 <sup>+</sup>/<sub>-</sub></div><div class = "buttonCol">/ * - +</div>';
let buttCol1 = document.getElementsByClassName("button-col1");
let buttCol2 = document.getElementsByClassName("button-col2");
let buttCol3 = document.getElementsByClassName("button-col3");
let buttCol4 = document.getElementsByClassName("button-col4");
buttCol1 = ["%", "7", "8", "9", "/"];
buttCol2 = ["V", "4", "5", "6", "*"];
buttCol3 = ["CE", "1", "2", "3", "-"];
buttCol4 = ["ON/C", "0", ".", "<sup>+</sup>/<sub>-</sub>", "+"];

buttons.style.background = "rgb(253,234,109)";
buttons.style.background =
  "radial-gradient(circle, rgba(253,234,109,1) 78%, rgba(239,205,0,1) 95%)";
buttons.style.height = "325px";
buttons.style.width = "325px";
buttons.style.display = "flex";
buttons.style.flexDirection = "column";
buttons.style.flexWrap = "wrap";
buttons.style.Height = "100%";
buttons.style.justifyContent = "start";

for (let x = 0; x < buttCol1.length; x++) {
  buttons.innerHTML += buttCol1[x];
}
for (let x = 0; x < buttCol1.length; x++) {
  buttons.innerHTML += buttCol2[x];
}
for (let x = 0; x < buttCol1.length; x++) {
  buttons.innerHTML += buttCol3[x];
}
for (let x = 0; x < buttCol1.length; x++) {
  buttons.innerHTML += buttCol4[x];
}
