/**
 *  Q1: Arrange the words in the sentence in ascending order of their length
 *  Input -> gfg is a comp science learning platform
 *  Output -> a is gfg comp science learning platform
 *
 */

const str = "gfg is a comp science learning platform";

function sortTextByWordLength(str){
    let arrOfWords = str.split(" ");

    //used callback function to sort as per the length of the words
    arrOfWords.sort((a,b)=> a.length - b.length);
    return arrOfWords.join(" ");
    // return arrOfWords;
}

const result = sortTextByWordLength(str);
console.log(result);