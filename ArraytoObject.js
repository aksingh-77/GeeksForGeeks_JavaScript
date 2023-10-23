/**
 * Create an array of name of names from the given array which has object for employees object
 * create an array of employees name whose  years of exprience is more than 3
 */

const employee = [
    {
        name:"Prakash",
        numOfYear : 5
    },
    {
        name:"Abhishek",
        numOfYear:1
    },
    {
        name:"Shiva",
        numOfYear:2
    },
    {
        name:"Gauri",
        numOfYear:6
    },
    {
        name:"Chinmay",
        numOfYear:3
    },
    {
        name:"Roshni",
        numOfYear:30
    }
]


//This is called as chaining method
//Filter just checks for the conditon and return the value
//We can use "&&" in place of "?" if we do not have else condition in terinary operator
const NamesOfEmployeeExpMoreThanFive = employee.filter(employee => employee.numOfYear>3 ).map(employee => employee.name);
console.log(NamesOfEmployeeExpMoreThanFive);