const btn = document.getElementById("mybutton");

btn.addEventListener("click", function () {
  alert("button clicked");
});

const btn2 = document.getElementById("mybutton2");
const blueBody = document.querySelector(".blue-background");

btn2.addEventListener("click", function (){
    blueBody.classList.toggle("red-background")
})
