//  Functions

// function login() {
//     console.log('Logged in successfully');
// }

// login();

//  ! callback

// function formateText (text , formateb) {
//     return typeof formateb === 'function' ? formateb(text) : text.toUpperCase();

// }

// const result = formateText('hello' , function(text) {
//     return text.charAt(0).toUpperCase() + text.slice(1);
// });

// console.log(result);

//  ! IIFE (Immediately invoked function expression)

// (function setup() {
//     console.log("Setup Done");
// }());

// (function () {
//     console.log('Setup Done');
// })();

//  ! Arrow function

// const login = function () {
//     console.log('Logged in');
// }

//   ? This can be same

// const login = () => {
//     console.log('Logged in');
// }

// login()

// const sum = (a , b) =>  a+b;

// console.log(sum(3,4));

// ! Good practices

// 1. Naming -> show , get , calc
// 2. One function --- one action
// 3. Function name should be descriptive
