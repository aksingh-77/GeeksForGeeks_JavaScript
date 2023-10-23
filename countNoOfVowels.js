// WAP to count number of vowles in the string

const string = "The quick brown fox jumps over the lazy dog";

function countNoOfVowels(str){
    const vowels = ["a", "e", "i", "o", "u"];

    let count = 0;

    for(let char of str){
        if(vowels.includes(char.toLowerCase())){
            count ++;
        }

    }
    return count;

}

const output = countNoOfVowels(string);
console.log(output);