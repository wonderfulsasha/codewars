/* Count the number of Duplicates Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits. */

duplicateCount('aabBcde');

function duplicateCount(text){
 text = text.toUpperCase();
 let arr = Array.from(text)
 arr.sort();
 let count = 0;
for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] == arr[i+1]) {
        if (arr[i] == arr[i+1] && arr[i] == arr[i-1]) {
        } else {
            count += 1;
        }
    } 
}
console.log(count); 
  }
