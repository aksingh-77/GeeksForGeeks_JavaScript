/**
 * Some of all the numbers which are less than 5 in array
 */

const arr = [10, 17, 61, 54, 44, 32, 39, 23];

// const ConditionCheck = (acc, curr) => {
//     if(acc <40 && curr<40){
//         ;
//     }
// };

//here we took acc and current as paramter for call back function and check the value of curr with if terinary condition
const sumOfNumber = arr.reduce((acc, curr) => curr<40? acc+curr:acc, 0);
console.log(sumOfNumber);