// Palindrome String 

const str = 'madam';
// let arr = str.split("");
// //console.log(arr);
// const reverseArr = arr.reverse();
// //console.log(reverseArr);
// const reverseStr = reverseArr.join("",);
// //console.log(reverseStr);

const reverseStr = str.split("").reverse().join("");

if(str == reverseStr){
    console.log("It's a Palindrome");
}
else{
    console.log("It's not a palindrome");
}
