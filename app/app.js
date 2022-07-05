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
