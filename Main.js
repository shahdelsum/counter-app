let counter = 0;
const counterValue = document.getElementById("counter-value");
const incrementbtn = document.getElementById("increment-btn");
const decrementbtn = document.getElementById("decrement-btn");
const reset = document.getElementById("reset");


incrementbtn.addEventListener("click", () => {
   counter++;
   counterValue.innerText = counter;

});



decrementbtn.addEventListener("click", () => {
  counter--;
  counterValue.innerText = counter;

});


reset.addEventListener("click", () =>{
  counter = 0;
  counterValue.innerText = counter;

});
