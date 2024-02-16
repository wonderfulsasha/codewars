/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as they are. 
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation". */
rot13('sa2s1ha')

function rot13(message){
 let firstPart = 'abcdefghijklmABCDEFGHIJKLM'
 let secondPart = 'nopqrstuvwxyzNOPQRSTUVWXYZ'
 const map = new Map();
 const map2 = new Map();
 let arr = [];
 for (let i = 0; i < firstPart.length; i++) {
 map.set(firstPart[i], secondPart[i])
 }
  for (let e = 0; e < secondPart.length; e++) {
 map2.set(secondPart[e], firstPart[e])
 }

for (let j = 0; j < message.length; j++) {
    if (map.has(message[j])) {
        let temp = map.get(message[j])
        arr.push(temp)

    } else if (map2.has(message[j])) {
        let temp = map2.get(message[j])
        arr.push(temp)
    } else {
        arr.push(message[j])
    }
}
return arr.join('')
}