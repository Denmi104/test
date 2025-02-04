"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 9;
// console.log(number);

// const obj = {
//     'one': 25,
//     'two': 31
// };
// console.log(obj);
// alert('hello, you are super)');   всплывающее окно, предупреждение

// const result = confirm('Are you here?');   всплывающее окно с вопросом и возможностью ответа (да/нет)
// const answer = prompt('vam est` 18?', '18');  всплывающее окно с возможностью полноценного ответа.
// console.log(answer);

// const answers = [];
// answers[0] = prompt('name', '');
// answers[1] = prompt('age', '');
// answers[2] = prompt('adress', '');
// document.write(answers);
// console.log(answers);

// const user = 'Dima';
// alert(`Hello, ${user}`);
// const numberOfFolms = +prompt('Сколько фильмов вы уже посмотрели?', "");
// const personalMovieDB = {
//     count: numberOfFolms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);



// =======================================================================


// const num = 50;
// switch (num) {
//     case 49:
//         console.log('error');
//         break;
//     case 100:
//         console.log('ne verno');
//         break;
//     case 51:
//         console.log('v tochku');
//         break;
//     default:
//         console.log('ne v etot raz!');
// }

// const test = 89;
// if (test < 20) {
//     console.log('net');
// } else if (test === 20) {
//     console.log('otlichno!');
// }
// else if (test > 20) {
//     console.log('ne v etot raz');
// }

// ========================================================
// console.log( NaN || 2 || undefined );


// console.log( NaN && 2 && undefined );


// console.log( 1 && 2 && 3 );


// console.log( !1 && 2 || !3 );


// console.log( 25 || null && !3 );


// console.log( NaN || null || !3 || undefined || 5);


// console.log( NaN || null && !3 && undefined || 5);


// console.log(5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }


// let result = '';
// const length = 7;
// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++){
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);

// first:    for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third Level: ${k}`);
//         }
//     }
// }

// for (let i = 5; i < 11; i++){
//     console.log(i);
// }

// for (let i = 20; i > 10; i--){
//     console.log(i);
//     if (i === 13) break;
// }


// for (let i = 1; i < 11; i++){
//     if (i % 2==0) {
//         console.log(i);
//     }
// }

// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i<arr.length;i++){
//         result[i]=arr[i];
// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof (data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof (data[i]) === 'string') {
//     data[i] = `${data[i]} - done`;
// }
// }
    
// console.log(data);


// const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }

// console.log(data);
    

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [data.reverse()];
// console.log(result);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

// let soneAge = 38;
// someVare = soneAge;
// console.log(someVare);

// let userHeight = 145 / 0;
// //Отримаємо NaN
// console.log(userHeight);

// let userName;
// //Отримаємо тип даних Null
// console.log(typeof userName);

// //Варіант №4
// let userSize = "45" / "8";
// //Отримаємо тип даних Number
// console.log(typeof userSize);

// prompt('hello', 18)

// let num =0;
// while (num<3) {
//     console.log(`число:  ${num}`);
//     num++;
// }
// forOne: for (let num = 0; 0 < 2; num++){
//     for (let size = 0; size < 3; size++){
//         if (size == 1) { break forOne; }
//         console.log(size);
        
//     }

// }

// function showName() {
//     console.log('Vasya');
// }
// setTimeout(showName, 0);
// console.log('Kolya');

// let someVar = 0;
// ++someVar;

// if (someVar) {
// console.log(someVar);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Пункт № ${i}`)
// }

// Задача №3
// Що потрапить в консоль ?
// if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
// console.log('000');
// }

// Задача №4
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку


// let homeWork = ["Олексій", 10, "10", 12, "Ірина"];
//  for (let index = 0; index < homeWork.length; ++index){
// if (homeWork[index] === 10){
// console.log(homeWork[index]);
// }
//  }
const elemBody = document.body;
console.log(elemBody);



let addList = (count = 3) => {
    const list = document.createElement(`ul`);
    for (let i=0; i < count; i++) {
        list.insertAdjacentHTML(
            'beforeend', `
            <li class="list__item">Елемент списку №${i + 1}</li>
            `);
    }
    document.body.insertAdjacentElement('afterbegin', list);
}
addList(20);

console.log(addList);

const body = document.body;
body.classList.add("louded");
if (body.classList.contains("louded")) {
    elemBody.style.background = `green`;
}

const items = document.querySelectorAll(`.item`);
console.log(items);
items.forEach((item, index) => {
    item.classList.add(`active`);
    item.innerText = `Елемент №${index +1};`
    
});

const but = document.querySelector(".button");
but.scrollIntoView({ block: `center`, behavior: `smooth` });

const link = document.querySelector(".link");
link.setAttribute("data-link", "100");
console.log(link);
const value = link.getAttribute("data-link")
if (value < 200) {
    link.style.color = "red";
}