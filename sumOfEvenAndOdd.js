/**
 * Given an array write a function that returns an Object with sum of even and Odd numbers
 * arr = [1, 2, 3, 4, 5, 6]
 * OUTPUT = {even: 12, odd:9}
 */

const arr = [1, 2, 3, 4, 5, 6];

//We have initialized acc with object {even:0, odd:0} as you can see after the comma in reduce method
//To add the even to even property of object we used {...acc, even: acc.even + cur} --> ...acc is ued to copy acc object and .....
//"even : acc.even+ cur" is used to update the even property of the acc object"
let even =0;
let odd =0;
const result = arr.reduce((acc, cur)=>cur % 2 ===0 ? {...acc, even: acc.even + cur}:{...acc, odd: acc.odd + cur},{even:0, odd:0});
console.log(result);