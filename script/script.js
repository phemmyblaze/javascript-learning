'use strict';



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


const ag = 15;
const drink = ag >= 18 ? 'wine: 🍷' : 'water 💧';
console.log(drink)


const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is${bill + tip}`);


function foodProcessors(apples, oranges){
    // console.log(apples, oranges);

    const juice = `Juice with ${apples} apple and ${oranges} orange`;
    return juice; 
}

const appleJuice = foodProcessors(5, 0);
const appleOrangeJuice = foodProcessors(10, 8);
console.log(appleJuice); 
console.log(appleOrangeJuice); 

///FUNCTION DECLARATION

function calcAge1(birthYear) {

    return 2023 - birthYear;
} 

const age1 = calcAge1(1997)

///FUNCTION EXPRESSION

const calcAge2 = function(birthYear) {
    return 2023 - birthYear
}
const age3 = calcAge2(2010)

console.log(age1, age3)

///ARROW FUNCTION 

// const calcAge4 = birthYear => 2037 - birthYear;
// const age4 = calcAge4(1994)
// console.log(age4)

const yearUntillRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age

    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntillRetirement(1997, 'Akinbobola'))
console.log(yearUntillRetirement(1989, 'sunday'))


////FUNCTION CALLING OTHER FUNCTION

function cutFruit(fruit) {
    return fruit * 4
}


function fruitMixer (apples, oranges){

    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);

    const fruit = `Fruits with ${applePieces} apples and ${orangePieces} oranges`;

    return fruit;

}

console.log(fruitMixer(2, 3));

///CODING CHALLENGE 4
/***********************
 
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
***********************/

const calcAge4 = birthYear => 2037 - birthYear;
const age4 = calcAge4(1994)
console.log(age4)

    ////Arrow function
// const calcAverage = scores => (scores, scores, scores) / 3; This was wrong because it was not added

const calcAverage = (scores1, scores2, scores3) => (scores1 + scores2 + scores3 ) / 3;

    ////Arrow function used in calculating average score

    const avgDolhins = calcAverage(44, 23, 71);
    console.log(avgDolhins)
    const avgKoalas = calcAverage(65, 54, 49);
    console.log(avgKoalas)

    ///Function to check the winner

    const checkWinner = (avgDolhins, avgKoalas) => {
        if (avgDolhins >= 2 * avgKoalas ) {
            return `Dolhins wins with ${avgDolhins} while Koalas has ${avgKoalas}`;
        } else if (avgKoalas >= 2 * avgDolhins){
            return `Koalas wins with ${avgKoalas} while Dolhins has ${avgDolhins}`;
        } else {
            return `Draw`;
        }
    }

    console.log(checkWinner(avgDolhins, avgKoalas))

    ///ARRAYS

    let friends = ['Bimbo', 'Bolu', 'Sunday'];
    console.log(friends[0])
    friends.push('Froday', 'Banji', 'Precious', 'Saviour')
    console.log(friends)
    friends.shift([2])
    console.log(friends)

    const years = [1995, 1996, 1997, 1998, 1999];
    const age5 = calcAge1(years[0])
    const age6 = calcAge1(years[1])
    const age7 = calcAge1(years[years.length -1])

    console.log(age5, age6, age7)

    const finalAge = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years[years.length -1])]
    console.log(finalAge)

    

    

    












