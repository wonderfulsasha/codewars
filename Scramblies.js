/* Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False */ 

scramble('a','aa')

function scramble(str1, str2) { 
  if (str1.length > 1000 && str2.length > 1000) {
    str1 = str1.slice(0, str1.indexOf(str1[0]+str1[1], 2))
    str2 = str2.slice(0, str2.indexOf(str2[0]+str2[1], 2))
  }
  console.log(result(str1,str2))
 return result(str1,str2)
} 

function result (str1,str2) {
  for (let i = 0; i < str2.length; i++) {
  if (str1.indexOf(str2[i]) != -1) {
     str1 = str1.replace(str2[i], '')
  } else {
    return false
  }
}
return true
}
