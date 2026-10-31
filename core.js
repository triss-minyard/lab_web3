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
    let result = [];
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
    if (n < 1 || !Number.isInteger(n)) {
        return false;
    }

    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }

    return true;

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

/**
 * Задание 8. Функция с накоплением результата.
 * Верните новую функцию, которая хранит текущее значение (вначале — initialValue).
 *
 * Если operatorFn передана, то при каждом вызове с аргументом newValue
 * возвращённая функция вычисляет operatorFn(текущее значение, newValue),
 * сохраняет результат как новое текущее значение и возвращает его.
 *
 * Если operatorFn не передана, возвращённая функция при любом аргументе
 * возвращает initialValue.
 *
 * Пример:
 *   const multFn = getOperationFn(-1, (a, b) => a * b);
 *   multFn(-1); // → 1   (-1 · -1)
 *   multFn(4);  // → 4   (1 · 4)
 *   multFn(2);  // → 8   (4 · 2)
 *
 *   const staticFn = getOperationFn(-1);
 *   staticFn(7); // → -1
 *
 * @param {*} initialValue — начальное значение
 * @param {Function} [operatorFn] — функция двух аргументов
 * @returns {Function}
 */
function getOperationFn(initialValue, operatorFn) {
    // Ваш код
}

/**
 * Задание 9. Генератор арифметической прогрессии.
 * Верните функцию, которая при первом вызове возвращает start,
 * а при каждом следующем — значение, увеличенное на step.
 * Значения по умолчанию: start = 0, step = 1.
 * Генераторы, созданные разными вызовами sequence, работают независимо.
 *
 * Пример:
 *   const gen = sequence(10, 3);
 *   gen(); // → 10
 *   gen(); // → 13
 *   gen(); // → 16
 *
 * @param {number} [start=0]
 * @param {number} [step=1]
 * @returns {Function}
 */
function sequence(start, step) {
    // Ваш код
}

/**
 * Задание 10. Глубокое сравнение двух значений.
 * Верните true, если значения равны по содержимому, и false в противном случае.
 *
 * Требования:
 *  - примитивы сравниваются по значению; NaN считается равным NaN;
 *  - объекты и массивы сравниваются рекурсивно по всем свойствам,
 *    порядок свойств не важен;
 *  - функции равны, только если это одна и та же функция;
 *  - null и undefined не равны друг другу.
 *
 * Примеры:
 *   deepEqual({a: 'a', b: 'b'}, {b: 'b', a: 'a'})        → true
 *   deepEqual({arr: [1, 2, 3]}, {arr: [1, 2]})            → false
 *   deepEqual({value: undefined}, {value: null})          → false
 *   deepEqual(NaN, NaN)                                   → true
 *
 * @param {*} firstObject
 * @param {*} secondObject
 * @returns {boolean}
 */
function deepEqual(firstObject, secondObject) {
    // Ваш код
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
