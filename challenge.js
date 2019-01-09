let counter = document.getElementById("counter")
let decrement = document.getElementById("-")
let increment = document.getElementById("+")
let like = document.getElementById("<3")
let pause = document.getElementById("pause")

var playing = !0

timer = function() {
  return setInterval(function() {
    counter.innerText = parseInt(counter.innerText) + 1
  }, 1000)
}
interval = timer()


decrement.addEventListener('click', function() {
  counter.innerText = parseInt(counter.innerText) - 1;
})

increment.addEventListener('click', function() {
  counter.innerText = parseInt(counter.innerText) + 1;
})

like.addEventListener('click', function() {

})

// pause.addEventListener('click', function(){
//   counter.innerText = parseInt(counter.innerText)
// })





pause.addEventListener("click", function() {

  playing ? (playing = !1, clearInterval(interval), this.innerText = "resume") : (playing = !0, interval = timer(), this.innerText = "pause"), [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a) {
    "pause" !== document.getElementById("counter").id && (document.getElementById("counter").disabled = !playing)
  })
})
