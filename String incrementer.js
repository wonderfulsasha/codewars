/* Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered. */ 

incrementString('hdfhdf099')

function incrementString (strng) {
  if (/[A-Za-z]/.test(strng) == false) {
    for (let i = strng; i++;) {
     i =  i.toString()
     i = i.padStart(strng.length, '0')
      return i
  }
  }
if (strng.search(/[0-9]/) != -1) {
  for (let i = strng.length; i--;) {
    if (strng[i].match(/\d/) && strng[i-1].match(/[A-Za-z]/)) {
      var numbers = strng.slice(i)
      var word = strng.slice(0, i)
      break;
    }
  }
} else {
  return strng + '1';
}
if (numbers.match(/[1-9]/) == null) {
  let result = '1'
  result.padStart(numbers.length, '0')
  return word + result.padStart(numbers.length, '0')
} else {
for (let i = numbers; i++;) {
  var numbersFinal = i;
numbersFinal = numbersFinal.toString()
numbersFinal = numbersFinal.padStart(numbers.length, '0')
  return word + numbersFinal
}
}
  }
