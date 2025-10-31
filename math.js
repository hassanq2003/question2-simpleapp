
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Invalid input');
    return a + b;
}

function divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
}

module.exports = { add, divide };
