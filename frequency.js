/**
 * Count frequency of all the characters in an array,
 * return the characters with max frequency, if 2 or more characters have
 * the same max frequency then return the characters with highest number
 */

const arr = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5, 5];

function getNumberWithMaxFreq(arr){
    let maxCount =0;
    let maxKey =0;
    let arrOfMaxFreqKeys = [];

    //To create an Onject of key value pairs
    const numberFreqObj = arr.reduce(
        (acc, cur)=> cur in acc ? {...acc, [cur]:acc[cur]+1}:{...acc, [cur]:1},
        {}
    );

    const arrOfKeys = Object.entries(numberFreqObj); //this line will create an nested array each nested array having value of key : value
    //find the element with maximum frequency
    for(let [key, value] of arrOfKeys){
        if(maxCount < value){
            maxCount = value;
        }
    }

    //Create an array of all elements having maximum frequency
    for(let [key, value] of arrOfKeys){
        if(maxCount === value){
            arrOfMaxFreqKeys = [...arrOfMaxFreqKeys, key];
        }
    }

    //find the largest key which is having maximum frequency
    for(let key of arrOfMaxFreqKeys){
        if(maxKey < key){
            maxKey = key;
        }
    }

    return maxKey;

    
}

const result = getNumberWithMaxFreq(arr);
console.log(result);