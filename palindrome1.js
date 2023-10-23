// Here we will check for string palindrome with for loop logic

const str = "madam";

function getReverseStr(str){
    let reverseStr = "";

    for(let i=str.length-1; i>= 0; i--){
        reverseStr += str[i];
    }
    return reverseStr;

}

const reverseStr = getReverseStr(str);
if(str == reverseStr){
    console.log("It's a Palindrome");
}
else{
    console.log("It's not a Palindrome");
}