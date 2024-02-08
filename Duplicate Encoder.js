/* The goal of this exercise is to convert a string to a new string 
where each character in the new string is "(" if that character appears only once in the original string, or ")" 
if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate. 
Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/
duplicateEncode('Success')


function duplicateEncode(word){
    word = word.toUpperCase();
    let arr = Array.from(word);
    let result = [];
    let count = {}
    arr.forEach(letter => {
    if (!count[letter]) {
        count[letter] = 1;
    } else {
        count[letter]++;
    }
})
for (let i = 0; i < word.length; i++) {
    if (count[word[i]] > 1 ) {
        result.push(')');
    } else {
        result.push('(')
    }
}
 return result.join('')
    }
    
    

