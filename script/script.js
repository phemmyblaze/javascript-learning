/*  CODING CHALLENGE 1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/


// Test Data 1


const markHeight = 1.69;
const markWeight = 78;

const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / markHeight ** 2;

console.log(`Mark bmi is ${markBMI} for first test`)

const johnBMI = johnWeight / johnHeight ** 2;

console.log(`John bmi is ${johnBMI} for first test`)


//TEST DATA 2 

const markHeight2 = 1.88;
const markWeight2 = 95;

const johnHeight2 = 1.76;
const johnWeight2 = 85;

const markBMI2 = markWeight2 / markHeight2 ** 2;

console.log(`Mark bmi is ${markBMI2} for second test`)

const johnBMI2 = johnWeight2 / johnHeight2 ** 2;

console.log(`John bmi is ${johnBMI2} for second test`)



/* CODING CHALLENGE 2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �


*/


const averageBMI = markBMI > johnBMI;
console.log(`mark bmi is greater than john`)

const averageBMI2 = markBMI2 < johnBMI2;
console.log(`John bmi  is greater than`)

if (markBMI > johnBMI) {
    console.log(`mark's bmi is ${markBMI} is higher than john ${johnBMI}`)
} else {
    console.log(`mark's bmi is ${markBMI} is less than ${johnBMI}`)
}


if (markBMI2 > johnBMI2) {
    console.log(`mark's bmi is ${markBMI2} is higher than john ${johnBMI2}`)
} else {
    console.log(`mark's bmi is ${markBMI2} is less than ${johnBMI2}`)
}

//TYPE CONVERSION / TYPE COERCION

const courrentYear = "2023";
console.log(courrentYear)

console.log(courrentYear + 18)
console.log(Number(courrentYear) + 18);

console.log(Number('bylaze'))
console.log(String('23'))


//TYPE COERCION
console.log(24 < 18)


let height = 1.76;

if (height) {
    console.log(`Height is defined! You are ${height} m tall
    keep growing tall
    `)

} else if (height == 0) {
    console.log (`height is ${height} you have to grow taller`)
} else  {
    console.log(`Height is not defined`)
}


//TRUTHY / FALSY

//AND OPERATOR &&

let age = 16;

if (age >= 20 && age <= 30) {
    console.log(`You are ${age} years old`)
} else  {
    console.log(`20 is greater than your age but you are less than 30 `)
}

// OR OPERATOR ||

let age2 = 60;

if (age2 == 20 || age ==30) {
    console.log(`Awesome you are ${age2} years old`)
} else {
    console.log(`Age is greater and equal to 30`)
}


///// CODING CHALLENGE 3

/* 

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;
let minScore = 100;
console.log(scoreDolphins, scoreKoalas);

//1. TESTING WHICH TEAM WINS THE TROPHY

if (scoreDolphins > scoreKoalas) {
    console.log(`Dolphins wins the trophy! 🏆`)
} else if (scoreDolphins === scoreKoalas) {
    console.log(`This is a draw no team wins the trophy 📍`)
} else {
    console.log(`Koalas wins the trophy! 🏆`)
}

console.log(`Score 2`)

//2. TEST FOR QUESTION 2
let scoreDolphins2 = (97 + 112 + 101) / 3;
let scoreKoalas2 = (109 + 95 + 123) / 3;
let minScore2 = 100;
console.log(scoreDolphins2, scoreKoalas2);

if (scoreDolphins2 <= minScore2) {
    console.log(`Dolphins wins the trophy! with a score of ${scoreDolphins2}`)
} else if (scoreKoalas2 >= minScore2) {
    console.log(`Koalas wins the trophy! with a score of ${scoreKoalas2}`)
} else {
    console.log(`No on wins try harder next season ���`);
}


console.log(`Score 3`)

//3. TEST FOR QUESTION 3  Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
let scoreDolphins3 = (97 + 112 + 101) / 3;
let scoreKoalas3 = (109 + 95 + 126) / 3;
let minScore3 = 100;
console.log(scoreDolphins3, scoreKoalas3);

if (scoreDolphins3 > minScore3 &&  scoreDolphins3 > scoreKoalas3) {
    console.log(`Dolphins wins the trophy! with a score of ${scoreDolphins3}`)
} else if (scoreKoalas3 > minScore3 && scoreKoalas3 > scoreDolphins3) {
    console.log(`Koalas wins the trophy! with a score of ${scoreKoalas3}`)
} else {
    console.log(`No on wins try harder next season ���`);
}


/// SWITCH STATEMENT AND IF/ELSE STATEMENTS


let weekday = 'Sunday';

if (weekday === 'Monday') {
    console.log(`Plan for the new week
    and also go for code meet up
    `)
} else if (weekday === 'Tuesday') {
    console.log(`
    Prepare for school week,
    Also buy grocery
    `)
} else if (weekday === 'Wednesday' || weekday === 'Thursday') {
    console.log(`Write code examples`)
} else if  (weekday === 'Friday') {
    console.log(`TGIF`)
} else if (weekday === 'Saturday') {
    console.log(`Beach day`)
} else if (weekday === 'Sunday') {
    console.log(`rest of the day`)
} else {
   console.log(`Not a valid day of the week`)
} 


/* 
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �

*/





const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is${bill + tip}`);












