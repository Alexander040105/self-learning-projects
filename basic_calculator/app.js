const num1 = document.querySelector('#taskInput1');
const num2 = document.querySelector('#taskInput2');
const result = document.querySelector('#result');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const averageButton = document.querySelector('#average');

addButton.onclick = () => addition(parseInt(num1.value), parseInt(num2.value));
subtractButton.onclick = () => subtraction(parseInt(num1.value), parseInt(num2.value));
multiplyButton.onclick = () => multiplication(parseInt(num1.value), parseInt(num2.value));
divideButton.onclick = () => division(parseInt(num1.value), parseInt(num2.value));
averageButton.onclick = () => average(parseInt(num1.value), parseInt(num2.value));


const addition = (number1,number2) => {
    sum = number1 + number2;
    num1.value = '';
    num2.value = '';
    result.innerText = sum;
};

const subtraction = (number1,number2) => {
    difference = number1 - number2;
    num1.value = '';
    num2.value = '';
    result.innerText = difference;
};

const multiplication = (number1,number2) => {
    product = number1 * number2;
    num1.value = '';
    num2.value = '';
    result.innerText = product;
};

const division = (number1,number2) => {
    quotient = number1 / number2;
    num1.value = '';
    num2.value = '';
    result.innerText = quotient;
};

const average = (number1,number2) => {
    averageResult = (number1 + number2)/2;
    num1.value = '';
    num2.value = '';
    result.innerText = averageResult;
};
