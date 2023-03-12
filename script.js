let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")
let button4 = document.getElementById("button4")

button1.addEventListener("click", Sum)
button2.addEventListener("click", Sub)
button3.addEventListener("click", Mult)
button4.addEventListener("click", Divi)



function Sum(){
   let a = document.getElementById("a").value
   let b = document.getElementById("b").value

   let result = document.getElementById("result")

   result.innerHTML = Number(a) + Number(b)
}
function Sub(){
   let a = document.getElementById("a").value
   let b = document.getElementById("b").value

   let result = document.getElementById("result")

   result.innerHTML = Number(a) - Number(b)
}
function Mult(){
   let a = document.getElementById("a").value
   let b = document.getElementById("b").value

   let result = document.getElementById("result")

   result.innerHTML = Number(a) * Number(b)
}
function Divi(){
   let a = document.getElementById("a").value
   let b = document.getElementById("b").value

   let result = document.getElementById("result")

   result.innerHTML = Number(a) / Number(b)
}