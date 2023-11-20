/**
 * Q2: Reverse words of string without changing their order
 * Input -> react is a library
 * Output -> tcaer si a yrarbil
 */

const str = "react is a library";
console.log(str[2])

function reverseOfWordsInSentence(str){
    let arrOfWords = str.split(" ");
    let reversedArrOfWords = arrOfWords.map((word)=>word.split("").reverse().join(""));
    return reversedArrOfWords.join(" ");
    // return reversedArrOfWords;

}

const result = reverseOfWordsInSentence(str);
console.log(result);