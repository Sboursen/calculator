import { add, subtract, sum, multiply, power, factorial } from './operations';

describe('add', function () {
    it('adds 0 and 0', function () {
        expect(add(0, 0)).toEqual(0);
    });

    it('adds 2 and 2', function () {
        expect(add(2, 2)).toEqual(4);
    });

    it('adds positive numbers', function () {
        expect(add(2, 6)).toEqual(8);
    });
});

describe('subtract', function () {
    it('subtracts numbers', function () {
        expect(subtract(10, 4)).toEqual(6);
    });
});

describe('sum', function () {
    it('computes the sum of an empty array', function () {
        expect(sum([])).toEqual(0);
    });

    it('computes the sum of an array of one number', function () {
        expect(sum([7])).toEqual(7);
    });

    it('computes the sum of an array of two numbers', function () {
        expect(sum([7, 11])).toEqual(18);
    });

    it('computes the sum of an array of many numbers', function () {
        expect(sum([1, 3, 5, 7, 9])).toEqual(25);
    });
});

describe('multiply', function () {
    it('multiplies two numbers', function () {
        expect(multiply([2, 4])).toEqual(8);
    });

    it('multiplies several numbers', function () {
        expect(multiply([2, 4, 6, 8, 10, 12, 14])).toEqual(645120);
    });
});

describe('power', function () {
    it('raises one number to the power of another number', function () {
        expect(power(4, 3)).toEqual(64); // 4 to third power is 64
    });
});

describe('factorial', function () {
    it('computes the factorial of 0', function () {
        expect(factorial(0)).toEqual(1); // 0! = 1
    });

    it('computes the factorial of 1', function () {
        expect(factorial(1)).toEqual(1);
    });

    it('computes the factorial of 2', function () {
        expect(factorial(2)).toEqual(2);
    });

    it('computes the factorial of 5', function () {
        expect(factorial(5)).toEqual(120);
    });

    it('computes the factorial of 10', function () {
        expect(factorial(10)).toEqual(3628800);
    });
});
