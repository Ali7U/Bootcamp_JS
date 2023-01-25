let div = document.querySelector("div");
let button = document.createElement("button");

function smallSize() {
  let para = document.getElementById("fonts");
  para.style.fontSize = "12px";
}
function largeSize() {
  let para = document.getElementById("fonts");
  para.style.fontSize = "25px";
}
function background() {
  let para = document.getElementById("fonts");
  para.style.backgroundColor = "yellow";
}

let form = document.getElementsByClassName("form");

function todoList() {
  let input = document.getElementById("input").value;
  let ul = document.getElementById("list");
  let li = document.createElement('li')

  li.appendChild(document.createTextNode(input))

  ul.appendChild(li)
}

function changeImgage(){
    document.getElementById("img").src =
      "https://play-lh.googleusercontent.com/G-R3hpPdMYzyS4pJ4Wpht1dYD3i-Kk9B9ZoHbV84E0OpdGIZpjBdVqwp93w-w_v3iJ0";
}


function plus(n1, n2){
    let m1
}