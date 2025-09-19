//The calculator contains the following set of components
//The Display
const display = document.querySelector(".display");

//The Buttons
const numberButtons = document.querySelectorAll(".number");
const decimalPointButton = document.querySelector(".point");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");


//The RAM 
let number1 = "";
let operator = "";
let number2 = "";
let total = "";
let numberToBeDisplayed = "";
let temporaryValue = "";
let temporaryOperator = "";


//The Encoder
function classifyButtonTypes(buttonValue){
    switch (buttonValue){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            return "number";
        case '+':
        case '-':
        case '*':
        case '/':
            return "operator";
        case "=":
            return "equal";
        case ".":
            return "point";
        case "clear":
            return "clear";
    };
}

numberButtons.forEach((button) => {
    let buttonValue = button.value;
    let buttonType = classifyButtonTypes(buttonValue);
    button.addEventListener("click", () => {
        buttonsControler(buttonType, buttonValue);
        populateDisplay(numberToBeDisplayed);
    })
});

operatorButtons.forEach((button) => {
    let buttonValue = button.value;
    let buttonType = classifyButtonTypes(buttonValue);
    button.addEventListener("click", () => {
        buttonsControler(buttonType, buttonValue);
        populateDisplay(numberToBeDisplayed);
    })
})
decimalPointButton.addEventListener("click", () => {
    let buttonValue = decimalPointButton.value;
    let buttonType = classifyButtonTypes(buttonValue);
    buttonsControler(buttonType, buttonValue);
    populateDisplay(numberToBeDisplayed);
});


equalButton.addEventListener("click", () => {
    let buttonValue = equalButton.value;
    let buttonType = classifyButtonTypes(buttonValue);
    buttonsControler(buttonType, buttonValue);
    populateDisplay(numberToBeDisplayed);
});

clearButton.addEventListener("click", () => {
    let buttonValue = clearButton.value;
    let buttonType = classifyButtonTypes(buttonValue);
    buttonsControler(buttonType, buttonValue);
    populateDisplay(numberToBeDisplayed);
});


//The Controller
function buttonsControler(buttonType, buttonValue){
    switch (buttonType){
        case 'number':
            temporaryValue += buttonValue;
            numberToBeDisplayed = temporaryValue;
            break;
        case 'operator':
            temporaryOperator = buttonValue;
            if (number1 == ""){
                if (temporaryValue != ""){
                    number1 = temporaryValue;
                    temporaryValue = "";
                }else{
                    temporaryValue = "";
                }

            }
            else {
                if (temporaryValue == ""){
                    break;
                }else {
                    number2 = temporaryValue;
                    operator = temporaryOperator;
                    total = operate(number1, number2, operator);
                    number1 = total;
                    numberToBeDisplayed = total;
                    number2 = "";
                    temporaryValue = "";
                }
            };
            break;
        case 'point':
            if ((temporaryValue != "") && !(temporaryValue.includes("."))){
                if (display.value == "0"){
                    temporaryValue = display.value + '.';
                    numberToBeDisplayed = temporaryValue;
                } else{
                    temporaryValue += '.';
                    numberToBeDisplayed = temporaryValue;
                };
            };
            break;
        case 'equal':
            operator = temporaryOperator;
            number2 = temporaryValue;
            if ((number1 != "") && (number2 != "") && (operator != "")){
                total = operate(number1, number2, operator);
                number1 = total;
                numberToBeDisplayed = total;
                number2 = "";
                temporaryValue = "";
                temporaryOperator = "";
            } else{
                number1 = temporaryValue;
                number2 = "";
                total = "";
                numberToBeDisplayed = number1;
            }
            break;
        case 'clear':
            number1 = "";
            operator = "";
            number2 = "";
            total = "";
            temporaryValue = "";
            numberToBeDisplayed = "";
            temporaryOperator = "";
            numberToBeDisplayed = "0";
            break;
    }
}


//The ALU
function add(num1 , num2){
    return num1.plus(num2);
};

function subtract(num1, num2){
    return num1.minus(num2);
};

function multiply(num1, num2){
    return num1.times(num2);
};

function divide(num1, num2){
    if (num2 == 0){
        return `Hey You Can't Do That :(`;
    }
    return num1.div(num2);
};


function operate(number1, number2, operator){
    let num1 = Big(Number(number1));
    let num2 = Big(Number(number2));
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


//The Display Encoder
function populateDisplay(numberToBeDisplayed){
    display.value = numberToBeDisplayed;
}




