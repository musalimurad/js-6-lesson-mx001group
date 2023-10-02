let createH1Tag = document.createElement("h1");

console.log(createH1Tag);

document.body.appendChild(createH1Tag)

createH1Tag.textContent = "Hello world"
createH1Tag.id = "text"
createH1Tag.className = "txt"
createH1Tag.style.color = "red"


let box = document.querySelector(".all")

let createBoxTwo = document.createElement("div")

box.appendChild(createBoxTwo)

createBoxTwo.className = "boxTwo"

let selectBoxTwo = document.querySelector(".boxTwo")

let newTextH1 = document.createElement("h1")
selectBoxTwo.appendChild(newTextH1)

newTextH1.textContent = "Hello"

console.log(newTextH1.textContent);

let newAttr = document.createAttribute("attr-murad")
// newAttr.value = "test"


let getNewTextH1 = document.querySelector(".boxTwo h1")
getNewTextH1.setAttributeNode(newAttr)
let getAttr = getNewTextH1.getAttributeNode("attr-murad")
console.log(getAttr);

// getNewTextH1.setAttribute(newAttr, "hellos")

console.log(getAttr);



