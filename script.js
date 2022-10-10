dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));

let candy = ["jellybeans"];

function displayCandy() {
  function addCandy(candyType) {
    candy.push(candyType);
  }
  addCandy("gumdrops");
}
displayCandy(candy);
// console.log(candy);

function dragElement(terrariumElement) {
  let position1 = 0,
    position2 = 0,
    position3 = 0,
    position4 = 0;
  terrariumElement.onpointerdown = pointerDrag;
}
dragElement(terrariumElement);

function pointerDrag(e) {
  e.preventDefault();
  console.log(e);
  position3 = e.clientX;
  position4 = e.clientY;
  document.onpointermove = elementDrag;
  document.onpointerup = stopElementDrag;
}

function elementDrag(e) {
  position1 = position3 - e.clientX;
  position2 = position4 - e.clientY;
  position3 = e.clientX;
  position4 = e.clientY;
  console.log(position1, position2, position3, position4);
  terrariumElement.style.top = terrariumElement.offsetTop - position2 + "px";
  terrariumElement.style.left = terrariumElement.offsetLeft - position1 + "px";
}
function stopElementDrag() {
  document.onpointerup = null;
  document.onpointermove = null;
}
