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


const num = 50;
switch (num) {
    case 49:
        console.log('error');
        break;
    case 100:
        console.log('ne verno');
        break;
    case 51:
        console.log('v tochku');
        break;
    default:
        console.log('ne v etot raz!');
}

const test = 19;
if (test < 20) {
    console.log('net');
} else if (test === 20) {
    console.log('otlichno!');
}