function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function sum(arr) {
    if (arr.length > 1) {
        return arr.reduce((a, b) => a + b);
    } else {
        return arr.length == 1 ? arr[0] : 0;
    }
}

function multiply(arr) {
    if (arr.length > 1) {
        return arr.reduce((a, b) => a * b);
    } else {
        return arr.length == 1 ? arr[0] : 0;
    }
}

function power(a, b) {
    if (a > 0 && b > 0) {
        return a ** b;
    }
    return 0;
}

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// function EvaluatExpression(stringExpression) {}

export { add, subtract, sum, multiply, power, factorial };
