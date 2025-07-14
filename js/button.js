const bottomButton = document.querySelectorAll(".numbers-button, .symbol");


const  maxInputLength = parseInt(mainDisplay.getAttribute("maxLength"));


bottomButton.forEach(button =>{
    

        if(!button.classList.contains("excludeJs")){
            button.addEventListener("click", ()=>{
                const mainDisplayLength = mainDisplay.value.length;

                if(mainDisplayLength < maxInputLength){

                    mainDisplay.value += button.textContent;
                    adjustDisplayFontSize();
                    

                };
                mainDisplay.dispatchEvent(new Event("input"));
                
            });
        };


});

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", ()=>{
    mainDisplay.value = "";
    resultDisplay.value = "";
});

const plusMinusButton = document.querySelector(".plus-minus-button");

const toggleSign = () =>{
    if(mainDisplay.value.startsWith("-")){
        mainDisplay.value = mainDisplay.value.slice("1");

        mainDisplay.dispatchEvent(new Event("input"));
    }else if(mainDisplay.value.startsWith("(")){
        mainDisplay.value = "-" + mainDisplay.value;

        mainDisplay.dispatchEvent(new Event("input"));
    }else if(errorShown){
        mainDisplay.value = "-(";
        errorShown =false;
       plusMinusButtonClicked = true;
       mainDisplay.dispatchEvent(new Event("input"));
    }else{
        mainDisplay.value = "-(" + mainDisplay.value;

        mainDisplay.dispatchEvent(new Event("input"));
    };
    
};

plusMinusButton.addEventListener("click", toggleSign);


const equalButton = document.querySelector(".equal-symbol");
equalButton.addEventListener("click", ()=>{
    if(errorShown){
        mainDisplay.value = "";
        errorShown = false;
        return;
    };
    if(mainDisplay.value.trim() === ""){
        mainDisplay.value = "";
        return;
    };
    try {
        const finalResult = math.format(calculatedResult(), {precision: maxInputLength});
        mainDisplay.value = finalResult;
        mainDisplay.dispatchEvent(new Event ("input"));
        resultDisplay.value = "";
    } catch (error) {
        mainDisplay.value = error.name;
        mainDisplay.dispatchEvent(new Event("input"));
        errorShown = true;
    }
});