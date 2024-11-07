let firstNumber = '';
let secondNumber = '';
let operator = null;
let isOperatorTyped = false;

function getNumbers(input) {
    let number = input.value;

    if (!isOperatorTyped) {

        firstNumber += number;
        document.getElementById("screen").value += number;
    }
    else {
        secondNumber += number;
        document.getElementById("screen").value += number;
    }


}
function operatorType(input) {
    operator = input.value;
    document.getElementById("screen").value += operator;
    isOperatorTyped = true;
}

function resultCalculation() {

    if (operator === '+') {
        let result = parseFloat(firstNumber) + parseFloat(secondNumber);

        document.getElementById("screen").value = String(result);
        firstNumber=String(result);
        secondNumber='';

    }
    else if (operator === '-') {
        let result = parseFloat(firstNumber) - parseFloat(secondNumber);

        document.getElementById("screen").value = String(result);
        firstNumber=String(result);
        secondNumber='';
    }
    else if (operator === '*') {
        let result = parseFloat(firstNumber) * parseFloat(secondNumber);

        document.getElementById("screen").value = String(result);
        firstNumber=String(result);
        secondNumber='';
    }
    else if (operator === '/') {
        let result = parseFloat(firstNumber) / parseFloat(secondNumber);
        document.getElementById("screen").value = String(result);
        firstNumber=String(result);
        secondNumber='';


    }

    isOperatorTyped=false;


}

function clearScreen() {

    document.getElementById("screen").value = '';
    firstNumber = '';
    secondNumber = '';
    operator = null;
    isOperatorTyped = false;


}
