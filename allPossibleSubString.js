/**
 * WAP to write all the possible substring 
 * 
 */

const str =  "Abhishek_Singh";

const getAllPossibleSubSting = str => {
    for(let i = 0; i<str.length; i++){
        //here we took j<= str.length because in slice method ending index is not included in slice. 
        // eg if slice(0,2) than it will only take values at position 0 and 1 not 2
        for(let j=i+1; j<=str.length; j++){
            console.log(str.slice(i,j))
        }
    }
}

getAllPossibleSubSting(str);