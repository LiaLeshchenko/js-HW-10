/*1 - Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
Порахувати суму всіх елементів масиву.
Знайти мінімальний елемент масиву.
Знайти максимальний елемент масиву.
!!! Перепишіть колбек-функції на стрілки */

// const processArray = (array, callback) => {
//     return callback(array)
// };
// const getSum = (arr) => { return arr.reduce((acc, curr) => acc + curr)}
// const getMin = (arr) => { return Math.min(...arr)}
// const getMax = (arr) => { return Math.max(...arr) }
// console.log(
//     processArray([1, 2, 3], getSum),
//     processArray([1, 2, 3], getMin),
//     processArray([1, 2, 3], getMax)
// );
/* 2. Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними. Використайте її для виконання наступних операцій:
Додавання.
Віднімання.
Множення.
Ділення.
!!!!  Перепишіть колбеки на стрілкові функції */
const operate = (a, b, callback) => {
    return callback(a, b)
};
// Виклик функції з різними операціями

    // (operate(10, 5, (a, b) => {
    //     return a - b
    // }));

console.log(operate(10, 5, (a, b) => a - b));

    // (operate(10, 5, (a, b) => {
    //     return a + b
    // }));

console.log(operate(10, 5, (a, b) => a + b));

    // (operate(10, 5, (a, b) => {
    //     return a * b
    // }));

console.log(operate(10, 5, (a, b) => a * b));

    // (operate(10, 5, (a, b) => {
    //     return a / b
    // }));
    console.log(operate(10, 5, (a, b) => a / b));