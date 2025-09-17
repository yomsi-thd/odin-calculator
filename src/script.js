function add(num1 , num2){
    return num1 + num2;
};

function subtract(num1, num2){
    return num1 - num2;
};

function multiply(num1, num2){
    return num1 * num2;
};

function divide(num1, num2){
    return num1 / num2;
};


let num1 = 0, num2 = 0, operator = "";

function operate(num1, num2, operator){
    switch (operator){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}


//--Function that populate the display when you click the buttons. It should stored the content of the display in a variable for use in the next step --
//By default, the display should be setted at 0.
const DEFAULT_DISPLAY_VALUE = 0;
const display = document.querySelector(".display");
//Every "number" and "operator" button will have an event listener that will handle the display
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
numberButtons.forEach((numberButton) => numberButton.addEventListener("click", () =>  populateDisplay(numberButton.value))); //Each button contains a string value of that "number" or "operator".
operatorButtons.forEach((operatorButton) => operatorButton.addEventListener("click", () =>  populateDisplay(operatorButton.value)));

function populateDisplay(buttonValue){
    //Upon a button press, If the current display value is "0", the display value should be switched from "0" to the 'just-pressed' button's value. 
    //If the display was 0 and an operator was pressed instead of the number, it will not replace the number "0" and instead concatenate the operator to the number "0"
    if (display.value == DEFAULT_DISPLAY_VALUE){
        if (buttonValue.includes("+" || "-" || "×" || "÷")) {
            display.value += buttonValue;
        }else{
            display.value = buttonValue;
        }
    }

    // Else, Under the condition that the display does NOT CONTAIN AN OPERATOR AND the button pressed was NOT AN OPERATOR, the current display value should concatinate the 'just-pressed' button's value
    //The display should only show 1 operator and do 1 operation at a time
    else {
        if (!(/[+\-×÷]/.test(buttonValue) && /[+\-×÷]/.test(display.value))) {
            display.value += buttonValue;
        } 
    };

}

//Upon hitting the 'AC' clear button, the display should be resetted back to 0
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => display.value = DEFAULT_DISPLAY_VALUE);





