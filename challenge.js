
let counter = document.getElementById("counter")
let decrement = document.getElementById("-")
let increment = document.getElementById("+")
let like = document.getElementById("<3")
let pause = document.getElementById("pause")

setInterval(function(){
  counter.innerText = parseInt(counter.innerText) + 1;
}, 1000)

decrement.addEventListener('click', function(){
  counter.innerText = parseInt(counter.innerText) - 1;
})

increment.addEventListener('click', function(){
  counter.innerText = parseInt(counter.innerText) + 1;
})

like.addEventListener('click', function(){

})
