// Задача 1 - Базовые операции с массивом

// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggy» в начало массива.

// const genres = ["Jazz", "Blues"];
// genres.push("Рок-н-ролл");
// genres.unshift("Folk");
// console.log("genres", genres);

// const lastIndex = genres.length - 1;
// console.log(lastIndex);
// const lastElement = genres[lastIndex];
// console.log(lastElement);

// const firstElement = genres.shift();
// console.log(genres);
// console.log(firstElement);

// genres.unshift("Country", "Reggy");

// console.log(genres);

// Задача 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// const values = "8 11";

// const numbers = values.split(" ");
// console.log("numbers", numbers);
// const result = numbers[0] * numbers[1];
// // const result = Number(numbers[0]) + Number(numbers[1]);
// // const result = +numbers[0] + +numbers[1];
// console.log(`result`, result);

// Задача 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// // for (let i = 0; i < fruits.length; i++) {
// //   console.log("order number", i + 1);
// //   console.log("element", fruits[i]);
// // }

// for (let fruit of fruits) {
//   let index = fruits.indexOf(fruit);
//   console.log("index", index + 1);
//   console.log("element", fruit);
// }

// Задача 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// Задача 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';
// Задача 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = 'Welcome to the future';

// Задача 7 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min;
// console.log(min); // 1

// Задача 8 - использование includes
