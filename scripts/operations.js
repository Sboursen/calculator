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

function devide(a, b) {
    return b !== 0 ? a / b : NaN;
}

function mod(a, b) {
    return a % b;
}

function percent(a) {
    return a * 100;
}

function sign(a) {
    return 0 - a;
}

function operate(operator, a, b) {
    switch (operator) {
        case 'plus':
            return add(a, b);
            break;
        case 'minus':
            return subtract(a, b);
            break;
        case 'times':
            return multiply([a, b]);
            break;
        case 'over':
            return devide(a, b);
            break;
        case 'mod':
            return mod(a, b);
            break;
        case 'sign':
            return sign(a);
            break;
        default:
            console.error(`'unknown math operation' ${operator}`);
    }
}

export { operate };
