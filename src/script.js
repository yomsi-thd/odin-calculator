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
//Create event listeners for every "number" and "operator" button.
//Each button contains a string value of that "number" or operator.
//By default, the display should be setted at 0.
//Upon a button press, if the current display value is "0", the number should be switched from "0" to the 'just-pressed' button's value. 
//If the current display value is NOT "0", then the current display value should concatinate the 'just-pressed' button's value.
//The display should only show 1 operator at a time and will not do 2 operations at the same time. 
//Upon hitting the 'AC' clear button, the display should be resetted back to 0 
