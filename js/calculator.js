function calculatedResult(){
    const inputForJs = mainDisplay.value
            .replace(/×/g, "*")
            .replace(/−/g, "-")
            .replace(/÷/g, "/");

        
    return math.evaluate(inputForJs);

}

const resultDisplay = document.querySelector(".result-display");

let errorShown = false;
let plusMinusButtonClicked = false;

mainDisplay.addEventListener("input", () =>{
    if (errorShown && !plusMinusButtonClicked){
        mainDisplay.value = mainDisplay.value.slice(-1);
        
        mainDisplay.dispatchEvent(new Event("input"));
        resultDisplay.value = calculatedResult();
        errorShown = false;
        return;
    }

    if(mainDisplay.value ==="Infinity" || mainDisplay.value ==="NaN" || mainDisplay.value ==="Undefined"){
        errorShown = true;
    }

    if(mainDisplay.value.trim() ===""){
        resultDisplay.value = "";
        return;
    };
    
    try {
        const result = math.format(calculatedResult(), {precision: maxInputLength});
        resultDisplay.value = result;
    } catch (error) {
        resultDisplay.value = "";
        plusMinusButtonClicked = false;

    }
});

mainDisplay.addEventListener("keydown", (e)=>{
    if (errorShown && e.key === "Backspace"){
        e.preventDefault();
        mainDisplay.value = "";
        errorShown = false;
        mainDisplay.dispatchEvent(new Event("input"));
    }
})
