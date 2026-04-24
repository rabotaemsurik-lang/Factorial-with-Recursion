function factorial(n) {
    if (typeof n !== 'number' || Number.isNaN(n) || n < 0) {
        throw new Error("Некоректне значення");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
const res = factorial(5);
console.log(res);