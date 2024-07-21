let display = document.getElementById('display');
let operator = null;
let firstNumber = '';

function addNumber(number) {
    display.value += number;
}

function setOperator(op) {
    operator = op;
    firstNumber = display.value;
    display.value = '';
}

function calculate() {
    let secondNumber = display.value;
    let result;

    switch(operator) {
        case '+':
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case '-':
            result = parseFloat(firstNumber) - parseFloat(secondNumber)
            break;
        case 'x':
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case '/':
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
    }

    display.value = result;
}

function clearDisplay() {
    display.value = '';
    operator = null;
    firstNumber = '';
}