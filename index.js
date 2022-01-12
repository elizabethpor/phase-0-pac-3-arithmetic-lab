function add(a, b) {
    console.log(add);
    return (a + b);
}
function subtract(a, b) {
    console.log(subtract);
    return (a - b);
}
function multiply(a, b) {
    console.log(multiply);
    return (a * b);
}
function divide(a, b) {
    console.log(divide);
    return (a / b);
}
let n = 10;
function increment(n) {
    console.log(increment);
    return (n += 1);
}
function decrement(n) {
    console.log(decrement);
    return (n -= 1);
}
function makeInt(string) {
    console.log(makeInt);
    return (parseInt(string, 10));
}
function preserveDecimal(string) {
    console.log(preserveDecimal);
    return (parseFloat(string));
}