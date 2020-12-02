//module imports:
import { operate } from './operations.js';

//setting the correct operation sign for each button
const operationSignCode = {
    times: 215,
    over: 247,
    minus: 8722,
    plus: 43,
    equal: 61,
    mod: 37,
    clear: 'CE',
    sign: 177,
};
const operationButtons = document.querySelectorAll('.operation');
operationButtons.forEach((operation) => {
    if (!operation.classList.contains('clear')) {
        operation.textContent = String.fromCharCode(
            operationSignCode[operation.classList[1]]
        );
    } else {
        operation.textContent = operationSignCode['clear'];
    }
});

const equalButton = Array.from(operationButtons).find((operation) =>
    operation.classList.contains('equal')
);
const clearButton = Array.from(operationButtons).find((operation) =>
    operation.classList.contains('clear')
);
const mathOperationButtons = Array.from(operationButtons).filter(
    (operation) =>
        !operation.classList.contains('clear') &&
        !operation.classList.contains('equal')
);

//writing and clearing an expression in input field

const inputField = document.querySelector('.input-output');
const digitButtons = document.querySelectorAll('.digit');
let currentOperation = null;
let takingInput = true;
let ans = null;
let a = null,
    b = null;

function formatOutput(output) {
    let outputArray = output.toString().split('');
    let out = output;
    let result = outputArray.length < 12 ? output : out.toExponential(9);
    return result;
}

function onDigitButtonClicked(e) {
    if (takingInput === true) {
        if (inputField.textContent.length < 15) {
            if (e.target.classList.contains('dot')) {
                if (inputField.textContent.split('').indexOf('.') === -1) {
                    inputField.textContent += e.target.textContent;
                }
            } else {
                inputField.textContent += e.target.textContent;
            }
        }
    } else {
        inputField.textContent = e.target.textContent;
        takingInput = true;
    }
    console.log(`a = ${a} , b = ${b} , currentOperation = ${currentOperation}`);
}

function onMathOperationButtonClicked(e) {
    if (b === null) {
        if (a === null) {
            if (inputField.textContent !== '') {
                a = Number(inputField.textContent);
                takingInput = false;
            }
        } else if (takingInput === true) {
            b = Number(inputField.textContent);
        }
        if (a !== null && b === null) {
            currentOperation = Array.from(e.target.classList).find(
                (op) => op !== 'operation'
            );
            if (currentOperation == 'sign') {
                a = operate(currentOperation, a);
                inputField.textContent = formatOutput(a);
            }
        }
    }

    if (b !== null) {
        if (currentOperation == 'sign') {
            b = operate(currentOperation, b);
            inputField.textContent = b;
        } else {
            a = operate(currentOperation, a, b);
            inputField.textContent = formatOutput(a);
            takingInput = false;
            b = null;
        }
        currentOperation = Array.from(e.target.classList).find(
            (op) => op !== 'operation'
        );
    }

    console.log(`a = ${a} , b = ${b} , currentOperation = ${currentOperation}`);

    console.log(`a = ${a} , b = ${b} , currentOperation = ${currentOperation}`);
}

function onEqualButtonClicked(e) {
    if (currentOperation !== null && a !== null) {
        if (takingInput === true) {
            b = Number(inputField.textContent);
            a = operate(currentOperation, a, b);
            inputField.textContent = formatOutput(a);
            takingInput = false;
            b = null;
            a = null;
        }
    }
    console.log(`a = ${a} , b = ${b} , currentOperation = ${currentOperation}`);
}

function onClearButtonClicked(e) {
    inputField.textContent = '';
    a = null;
    b = null;
    ans = null;
    currentOperation = null;
    takingInput = true;
}

digitButtons.forEach((digit) =>
    digit.addEventListener('click', onDigitButtonClicked)
);
mathOperationButtons.forEach((operation) =>
    operation.addEventListener('click', onMathOperationButtonClicked)
);
clearButton.addEventListener('click', onClearButtonClicked);
equalButton.addEventListener('click', onEqualButtonClicked);
