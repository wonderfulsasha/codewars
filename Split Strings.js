/* Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */ 

solution("abcdefa")

function solution(str){
    const arr = [];
   let temp; 
for (let i = 0; i < str.length; i += 2) {
temp =  str.slice(i, i + 2);
if (temp.length < 2) {
    temp = temp + "_";
    arr.push(temp)
} else {
arr.push(temp)
}
}
return arr;
}