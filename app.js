import { add, subtract, multiply, divide } from './math.js';

const num_1 = document.getElementById('number1');
const num_2 = document.getElementById('number2');
const operatorSelect = document.getElementById('operator');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const num1 = parseFloat(num_1.value);
    const num2 = parseFloat(num_2.value);
    const operator = operatorSelect.value;
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = "Please enter valid numbers";
        return;
    }

    let result;

    switch(operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid operator";
    }

    resultDiv.textContent = `Result: ${result}`;
});