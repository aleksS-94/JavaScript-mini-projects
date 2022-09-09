

////////////////////////


console.log('Project 1');

// This is a practice project for the correct use of variables, 'const' and 'let' keywords, string interpolation and the Math.floor()method 

console.log('In this project I am converting temperatures in Kelvin to Celsius, then to Fahrenheit and Newton.');

/* A constant variable set equal to 293. Represents temperature in Kelvin */
const kelvin = 293;
/* A constant variable equal to the result of subrtacting 273 from the value of kelvin variable. Converts Kelvin to Celsius */
const celsius = kelvin - 273;
/* Let declaration used on a variable to be able to change its value later on. It represents conversion to Fahrentheit from Celsius */
/* The Math.floor() method used to round down the Fahrenheit temperature. The result was saved to the fahrenheit variable. */
let fahrenheit = celsius * (9/5) +32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit}degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton}degrees Newton.`);



//////////////////////

console.log('Project 2');

// A mini project focused on variables, string interpolation and multiplication assignment operator

console.log("Using JavaScript I'm going to convert human age into dog years.");

/* 8 years in a human’s life equates to 45 years in a dog’s life.

Here’s how you I'm going to convert my age from “human years” to “dog years”:

    - The first two years of a dog’s life count as 10.5 dog years each.
    - Each year following equates to 4 dog years.

*/

// I used the const keyword to create a variable representing my age
const myAge = 27;
// I used the let keyword to create a variable representing the first two years of a dog’s life
let earlyYears = 2;
// I used the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassigned it to earlyYears variable
earlyYears *= 10.5;
// I subtracted 2 from the value of my Age and set the result equal to a variable called laterYears. I’ll be changing this value later hence the let keyword
let laterYears = myAge - 2;
// I performed multiplication on the laterYears variable by 4 to calculate the number of dog years accounted for by my later years. 
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

// earlyYears and laterYears added together and stored in a variable named myAgeInDogYears.
const myAgeInDogYears = (earlyYears + laterYears);

// My name as a string with a .toLowerCase() method applied to it and stored in a new variable
let myName = 'Aleks Smith'.toLowerCase();

// Utilising string interpolation, I used a console.log statement that displays my name and age in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);



/////////////////////////



console.log('Project 3');

// Mini project exploring the use of conditional (ternary) operator and switch statements

console.log('In this project I built a Magic Eight Ball using control flow in JavaScript.');
console.log('The user will be able to input a question, then our program will output a random fortune.');

let userName = '';
userName ? console.log('Hello,', userName) : console.log('Hello!');
let userQuestion = 'Will I be rich soon?';
console.log(`${userName} has asked - ${userQuestion}`);
let randomNumber = Math.floor (Math.random() *8);
console.log(randomNumber);
let eightBall = '';

switch(randomNumber){
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  break;
  case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;
}
console.log(`The magic 8 Ball says: ${eightBall}.`);



//////////////////////////////////////



console.log('Project 4');

// Project utilising the if/else statements, logical operators and the mathematical assignment operators

console.log('I wrote a program that will register runners for the race and give them instructions on race day, depending on whether they fulfill certain criteria');

let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 19;
if(registeredEarly && age >18){
  raceNumber += 1000;
}
if (registeredEarly && age >18){
  console.log(`Your race starts at 9.30am, your race number is ${raceNumber}.`);
} else if(!registeredEarly && age > 18){
console.log(`Your race starts at 11am, your race number is ${raceNumber}.`);
} else if(age < 18){
  console.log(`Your race starts at 12.30pm, your race number is ${raceNumber}.`)
} else {
  console.log('Please see the registration desk');
}



/////////////////////////////////////
