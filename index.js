const element = document.getElementById("main");
element.remove();
const newHeader = document.createElement ("h1")
newHeader.id = "victory"
newHeader.textContent = "giorgi is the champion";

document.body.appendChild(newHeader)