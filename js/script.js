// 'use strict';
// console.log("hello");
// console.log('hello'.toUpperCase());
// console.log('hello'.length);
// let userName = 'Aniya';
// console.log(typeof userName);
// alert(userName);
// const value = prompt('Please enter your name!');
// console.log(value);
// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);
// const x = 9;
// const y = 5;.

// console.log(x % y);
// let z = 5;
// z += 10;
// console.log(z);
// console.log(1 !== 2);
// console.log(2 === 3);
// console.log(Number('3'));
// console.log(Number('v'));
// console.log(Number.parseInt('12.46px'));
// console.log(Number.parseFloat('12.46px'));
// let invalidNumber = Number('ghvhgg');
// console.log(Number.isNaN(invalidNumber));
// invalidNumber = 5;
// console.log(Number.isNaN(invalidNumber));
// console.log((0.17 + 0.24).toFixed(2));
// console.log(Math.floor(1.7));
// console.log(Math.ceil(1.7));
// console.log(Math.round(1.7));
// console.log(Math.max(32.1, 10, 32, 1));
// console.log(Math.pow(3, 2));
// console.log(Math.random());
// console.log(Math.random() * (10 - 1) + 1);
// let message = 'Mango' + ' is' + ' a' + ' fruit';
// console.log(message);
// message = 1 + '3';
// console.log(message, typeof message);
// let guestName = 'Mango';
// let roomNumber = 207;
// let greeting = `Welcome ${guestName}, your room number is ${roomNumber} `;
// console.log(greeting);
// guestName = 'Apple';
// roomNumber = 13;
// greeting = `Welcome ${guestName}, your room number is ${roomNumber} `;
// console.log(guestName, roomNumber, greeting);
// console.log(greeting.length, greeting.toUpperCase(), greeting.toLowerCase());
// console.log(greeting.indexOf('13'));
// console.log(greeting.includes('13'));
// console.log(greeting.endsWith(' '));
// console.log(greeting.replaceAll('13', '222'));
// console.log(greeting.slice(0, 35));
// let cost;
// const subs = "vip";
// if (subs === 'vip') {
//     cost = 100;
// } else if (subs === 'pro') {
//     cost = 50;
// } else {
//     console.log('invalid type');
// }

// console.log(cost);

// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type);

// let cost;
// const subscription = 'premium';
// switch (subscription) {
//     case 'free':
//         cost = 0;
//         break;
//     case 'pro':
//         cost = 500;
//         break;
//     case 'premium':
//         cost = 600;
//         break;
//     default:
//         console.log('invalid subscription type');
// }
// console.log(cost);

// let counter = 0;
// while (counter < 10) {
//     console.log('counter :', counter);
//     counter += 1;
// }

// let password = '';
// do {
//     password = prompt('enter your password with min 5 symbols', '');
// } while (password.length < 5);
// console.log('entered password: ', password);

// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);
//     if (i === 3) {
//         console.log('found number 3');
//         break;
//     }
// }

// console.log('log after a cycle');

// const number = 10;
// for (let i = 0; i < number; i += 1) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log('odd i: ', i);
// }