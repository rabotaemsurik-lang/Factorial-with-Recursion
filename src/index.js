/**
 * Обчислює факторіал числа за допомогою рекурсії.
 *
 * @param {number} n - Ціле невід'ємне число.
 * @returns {number} Факторіал числа або 0 у разі некоректних даних.
 */
function factorial(n) {
    if (typeof n !== 'number' || Number.isNaN(n)) {
        return 0;
    }
    if (n < 0 || !Number.isInteger(n)) {
        return 0;
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(-1));
console.log(factorial(false));
console.log(factorial("5"));