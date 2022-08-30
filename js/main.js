var elListButton = document.querySelector(".p-title-p-btn-l");
var elBody = document.querySelector("body");

elListButton.addEventListener("click", function(){
  elBody.classList.add("p-title-p-list-open");
})


var elGridButton = document.querySelector(".p-title-p-btn-g");

elGridButton.addEventListener("click" , function (){
  elBody.classList.remove("p-title-p-list-open");
})