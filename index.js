const element = document.getElementById("main");
element.remove();
const newHeader = document.querySelector('h1');
newHeader.id = 'victory';
const yourName = 'Your Name';
newHeader.textContent = `${yourName} is the champion`;