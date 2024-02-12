/* A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */ 

isPangram("The quick brown fox jumps over the lazy dog.")

function isPangram(string){
    let set = new Set();
  string = string.toLowerCase().replaceAll(/\W/g, '').replaceAll(/\d/g, '');
  const arr = Array.from(string);
  const result = arr.map(x => set.add(x))
  if (set.size == 26) {
    return true
  } else {
   return false
  }
  }