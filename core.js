
/** Задание 1. Проверка на целое число. */
function isInteger(n) {
    return Number.isInteger(n);
}

/** Задание 2. Массив чётных чисел от 2 до 20 включительно. */
function even() {
    const result = [];
    for (let i = 2; i <= 20; i += 2) {
        result.push(i);
    }
    return result;
}

/** Задание 3. Сумма чисел от 1 до n с помощью цикла. */
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/** Задание 4. Сумма чисел от 1 до n с помощью рекурсии. */
function recSumTo(n) {
    if (n <= 0) {
        return 0;
    }
    return n + recSumTo(n - 1);
}

/** Задание 5. Факториал числа n (0! = 1). */
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

/** Задание 6. Является ли число степенью двойки. */
function isBinary(n) {
    if (!Number.isInteger(n) || n < 1) {
        return false;
    }
    while (n % 2 === 0) {
        n /= 2;
    }
    return n === 1;
}

/** Задание 7. n-е число Фибоначчи. */
function fibonacci(n) {
    let prev = 0;
    let curr = 1;
    for (let i = 0; i < n; i++) {
        [prev, curr] = [curr, prev + curr];
    }
    return prev;
}
/** Задание 8.  */
function getOperationFn(initialValue, operatorFn) {
    let current = initialValue;

    return function (newValue) {
        if (typeof operatorFn !== 'function') {
            return initialValue;
        }
        current = operatorFn(current, newValue);
        return current;
    };
}

/** Задание 9. Генератор арифметической прогрессии. */
function sequence(start = 0, step = 1) {
    let current = start - step;

    return function () {
        current += step;
        return current;
    };
}

/** Задание 10. Глубокое сравнение двух значений. */
function deepEqual(firstObject, secondObject) {
    if (firstObject === secondObject) {
        return true;
    }

    if (Number.isNaN(firstObject) && Number.isNaN(secondObject)) {
        return true;
    }

    if (
        typeof firstObject !== 'object' || firstObject === null ||
        typeof secondObject !== 'object' || secondObject === null
    ) {
        return false;
    }

    if (Array.isArray(firstObject) !== Array.isArray(secondObject)) {
        return false;
    }

    const keysFirst = Object.keys(firstObject);
    const keysSecond = Object.keys(secondObject);

    if (keysFirst.length !== keysSecond.length) {
        return false;
    }

    for (const key of keysFirst) {
        if (!Object.prototype.hasOwnProperty.call(secondObject, key)) {
            return false;
        }
        if (!deepEqual(firstObject[key], secondObject[key])) {
            return false;
        }
    }

    return true;
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
