/* Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. 
For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("");

† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character. */

firstNonRepeatingLetter('abba')

function firstNonRepeatingLetter(s) {
  let count = 0;
    if (s.length == 1 || s == '') {
        return s;
    } else if (s.length > 1) {
    let str = s.toLowerCase()
for (let i = 0; i < str.length; i++) {
let letter = str[i];
let tempr = str.slice(0, i) + str.slice(i+1, str.length);
for (let j = 0; j < tempr.length; j++) {
    if (!tempr.includes(letter)) {
        return s[i]
    } else {
      count += 1;
    }
}
}
    } 
  if (count = s.length) {return ''}
}