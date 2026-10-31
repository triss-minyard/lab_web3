/*
 * Задание 1. Проверка на целое число.
 * Верните true, если число n целое, и false в противном случае.
 */
function isInteger(n) {
    return Number.isInteger(n);
}

/**
 * Задание 2. Массив чётных чисел.
 * Верните массив чётных чисел от 2 до 20 включительно.
 */
function even() {
    const result = [];
    for (let i = 2; i <= 20; i += 2) {
        result.push(i);
    }
    return result;
}

/**
 * Задание 3. Сумма чисел от 1 до n с помощью цикла.
 */
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Задание 4. Сумма чисел от 1 до n с помощью рекурсии.
 * Функция должна вызывать сама себя; циклы не используются.
 */
function recSumTo(n) {
    if (n === 1) {
        return 1;
    }
    return n + recSumTo(n - 1);
}

/**
 * Задание 5. Факториал числа n: n! = 1 · 2 · … · n, при этом 0! = 1.
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

/**
 * Задание 6. Проверка, является ли число степенью двойки (1, 2, 4, 8, …).
 */
function isBinary(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

/**
 * Задание 7. n-е число Фибоначчи.
 * Последовательность: 0, 1, 1, 2, 3, 5, 8, 13, …
 * Каждое число равно сумме двух предыдущих; fibonacci(0) = 0, fibonacci(1) = 1.
 */
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        const next = a + b;
        a = b;
        b = next;
    }
    return b;
}


module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
