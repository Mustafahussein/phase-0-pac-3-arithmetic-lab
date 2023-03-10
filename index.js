function add(a, b) {
    return a + b;
  }

function subtract(a, b) {
    return a -b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    return ++n;
}
/*let n = 5;
n = increment(n);
*/

function decrement(n) {
    return --n;
}

function makeInt(string) {
    const parsed = parseInt(string, 10);
    return isNaN(parsed) ? NaN: parsed;
    //return parseInt(n, 10);
}

function preserveDecimal(string) {
    return parseFloat(string);
}