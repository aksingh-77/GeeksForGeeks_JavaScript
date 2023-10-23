//WAP tp mask last 4 charaters with #

const str = "38492374937493749";


const maskedChar = "#".repeat(4);
const result = str.slice(0, str.length-4) + maskedChar;
console.log(result);
