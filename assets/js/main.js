let btns = document.querySelectorAll(".box button")
let box = document.querySelector(".box")
console.log(btns);

console.log(btns.length);
btns.forEach(item=>item.onclick=function(){
    console.log("hello");
})

// btns.keys(i=>console.log(i))


let btnTwo = document.querySelector(".btn[type=submit]")
console.log(btnTwo);
console.log(btnTwo.id);
console.log(btnTwo.textContent);
console.log(btnTwo.ariaAutoComplete);
console.log(btnTwo.innerHTML);

btnTwo.innerHTML = "<span>Hello</span>"


console.log(box.lastElementChild);
console.log(box.firstElementChild);
console.log(box.nextElementSibling);

console.log(btns[1].parentElement);

console.log(box.ariaValueText);

console.log(box.firstElementChild);

console.log(box.children);

console.log(box.classList);

btns[0].onclick = ()=>{
    // box.classList.replace("box", "murad")
    // box.classList.toggle("newBox2")
    // box.classList.remove("box")
    box.classList.add("newBox")
    // console.log(box.classList.item(2));
    // console.log(box.role);
    // console.log(box.tagName);
   
}


