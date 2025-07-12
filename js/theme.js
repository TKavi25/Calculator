const body = document.querySelector("body");

const sunButton = document.querySelector(".sun");
sunButton.addEventListener("click", function(){
    body.classList.remove("dark");
});

const moonButton = document.querySelector(".moon");
moonButton.addEventListener("click", function(){
    body.classList.add("dark");

});