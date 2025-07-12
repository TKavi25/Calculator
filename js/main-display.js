const mainDisplay = document.querySelector(".main-display");


const mainDisplayLength = mainDisplay.value.length;
const maxFontSize = 24;
const minFontSize = 12;
const newFontSize = Math.max(minFontSize, maxFontSize - mainDisplayLength);
mainDisplay.style.fontSize = `${newFontSize}cqw`;


function adjustDisplayFontSize(){
    const mainDisplayLength = mainDisplay.value.length;
    const newFontSize = Math.max(minFontSize, maxFontSize - mainDisplayLength);

    mainDisplay.style.fontSize = `${newFontSize}cqw`;
}

mainDisplay.addEventListener("input", ()=>{
    adjustDisplayFontSize();
});

