/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('jonas');
console.log(23);

let firstName = "matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Varible name convention
let jonas_matilda = "JM";
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'none';
let myCurrentJob = 'none';

console.log(myFirstJob)


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'CS';
console.log(lastName);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'C';
const lastName = 'S'
console.log(firstName + ' ' + lastName);

// assginment oprators
let x = 10 +5; //15
x += 10; // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x ++; // x = x + 1
x --; // x = x - 1
x --;
console.log(x);

//comparioson opratiers
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const avareageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, avareageAge)
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI)