// WAP to delete all the vowels from the string

const string = "The quick brown fox jumps over the lazy dog";

function getStringWithNoVowels(str){
    const vowles = ["a", "e", "i", "o", "u"];
    let result = "";

    for(let char of str){
        if(!vowles.includes(char.toLowerCase())){
            result += char;
        }
        
    }
    return result;
}

const output = getStringWithNoVowels(string);
console.log(output);