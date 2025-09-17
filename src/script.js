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
        case "×":
            return multiply(num1, num2);
        case "÷":
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
operatorButtons.forEach((operatorButton) => operatorButton.addEventListener("click", () =>  operator = operatorButton.value));

function populateDisplay(buttonValue){
    //Upon a button press, If the current display value is "0", the display value should be switched from "0" to the 'just-pressed' button's value. 
    //This first value will be also stored in "num1"
    //Upon clicking an operator, the first value is kept inside a variable, the operator button gets highlighted.
    //The display will NOT display an operator on screen, however, the selected operator is kept tracked for calculation later. 
    //Upon clicking on another number after clicking on an operator once, the display value should be switched "num1" to the 'just-presssed' button's value
    //This second value will be stored in "num2"
    //If there's 2 operators are clicked twice with at least 2 numbers entered, display the operated value AND highlight the button of the 2nd operator
    //If 1 operator was click AND the "=" was pressed, display the operated value
    
}

//Upon clicking the 'AC' clear button, the display should be resetted back to 0
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => display.value = DEFAULT_DISPLAY_VALUE);





