/**
 * Generate Secret Code from a given string
 * Input --> Prakash
 * Encode by 2
 * Output --> rtcmcuj
 */

const inputStr = "Abhishek";
const shiftByPos = 2;

const getEncodedStr = (str, shiftByPos)=> {
    let encodedString = "";

    for(let i = 0; i<str.length; i++){
        asciiValueOfChar  = str.charCodeAt(i);
        //console.log(asciiValueOfChar); 

        encodedString += String.fromCharCode(asciiValueOfChar+shiftByPos);
        //console.log(encodedString)
    }
    return encodedString;

}

const encodedValue = getEncodedStr(inputStr, shiftByPos);
console.log(`Encoded Value is -->"${encodedValue}"`);


const getDecodedString = (str, shiftByPos)=>{
    let decodedString = "";

    for(let i = 0; i<str.length; i++){
        asciiValueOfChar = str.charCodeAt(i);

        decodedString += String.fromCharCode(asciiValueOfChar-shiftByPos)
    }
    return decodedString;
}

const decodedValue = getDecodedString(encodedValue, shiftByPos);
console.log(`Decoded Value is -->"${decodedValue}"`);