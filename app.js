
console.log("this is my app");

let container = document.querySelector('.container');
console.log(container);

// container.classList.add("container-show");

let cross = document.querySelector(".cross");
// console.log(cross);


let toggle = document.querySelector(".toggle");
// console.log(toggle);

toggle.addEventListener("click" , ()=>{
    container.classList.toggle("container-show")
})

cross.addEventListener("click" , ()=>{
    container.classList.remove("container-show")
    console.log(container)
})
