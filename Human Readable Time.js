/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. */

humanReadable(165619)

function humanReadable (seconds) {
    if (seconds == 0) {
    return '00:00:00'
  } else {
  
  let arr = []
  if (seconds > 59) {
var minutes = seconds / 60 
var hours = Math.floor(minutes / 60)
if (minutes % 60 == 0) {
  minutes = 0;
}
if (hours < 10) {
  hours = '0' + hours;
}
var secondsLeft = seconds - (hours * 60 * 60) 
if (secondsLeft > 59) {
 minutes =  Math.floor(secondsLeft / 60 ) 
 secondsLeft = secondsLeft - (minutes * 60)
}
if (minutes < 10 || minutes == 0) {
  minutes = '0' + minutes;
 } else if (minutes > 59) {
  minutes = '00'
 }
  if (secondsLeft < 10 || secondsLeft == 0) {
  secondsLeft = '0' + secondsLeft;
 }
} else {
  return '00:00:' + seconds
}
arr.push(hours, minutes, secondsLeft)
return arr.join(':')
  }
}