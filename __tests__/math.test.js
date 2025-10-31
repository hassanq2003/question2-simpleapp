
const { add, divide } = require('../math');

describe('Math Functions', () => {
    test('add() returns correct sum', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('add() throws error for invalid input', () => {
        expect(() => add(2, '3')).toThrow('Invalid input');
    });

    test('divide() returns correct quotient', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('divide() throws error when dividing by zero', () => {
        expect(() => divide(5, 0)).toThrow('Division by zero');
    });
});
