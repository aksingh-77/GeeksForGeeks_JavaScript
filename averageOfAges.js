/**
 * Average age of family members
 */

const familyMembers = [
    {
        name:"Abhishek",
        age:25,
    },
    {
        name:"Sneha",
        age:20
    },
    {
        name:"Gauri",
        age:26
    },
    {
        name:"Pawan",
        age:40
    }
]

const totalAge = familyMembers.reduce((acc, cur) => acc + cur.age, 0);
const averageAge = totalAge/familyMembers.length;
console.log(averageAge);