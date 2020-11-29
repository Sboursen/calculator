//module imports:
import * as operations from './operations.js';

//setting the correct operation sign for each button
const operationSignCode = {
    times: 215,
    over: 247,
    minus: 8722,
    plus: 43,
    equal: 61,
};
const operationButtons = document.querySelectorAll('.operation');
operationButtons.forEach((operation) => {
    operation.textContent = String.fromCharCode(
        operationSignCode[operation.classList[1]]
    );
});

//writing and clearing an expression in input field

const inputField = document.querySelector('.input');
const clearButton = document.querySelector('.clear');
const digitButtons = document.querySelectorAll('.digit');
const outputField = document.querySelector('.output');

function onDigitButtonClicked(e) {
    inputField.textContent = inputField.textContent + e.target.textContent;
}

function onOperationButtonClicked(e) {
    inputField.textContent =
        inputField.textContent + ' ' + e.target.textContent + ' ';

    if (e.target.classList.contains('equal')) {
        outputField.textContent = 'result';
    }
}

function onClearButtonClicked(e) {
    inputField.textContent = '';
}
clearButton.addEventListener('click', onClearButtonClicked);
digitButtons.forEach((digit) =>
    digit.addEventListener('click', onDigitButtonClicked)
);
operationButtons.forEach((operation) =>
    operation.addEventListener('click', onOperationButtonClicked)
);
