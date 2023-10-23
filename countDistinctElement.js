/**
 * Count of occurence of distinct elements
 * 
 * Output {a:2, b:2, c:2, e:1, f:1}
 */

const arr = ["a", "b", "c", "c", "d", "e", "b", "f", "a"];

const result = arr.reduce((acc, cur)=> cur in acc ? {...acc, [cur]: acc[cur]+1} : {...acc, [cur]:1}, {});
console.log(result);