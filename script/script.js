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