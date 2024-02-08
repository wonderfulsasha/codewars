/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc. */


alphabetPosition("The narwhal bacons at midnight.");


function alphabetPosition(text) {
text = text.toUpperCase(); 
const alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let result = [];
for (let i = 0; i < text.length; i++) {
    let temp = alp.indexOf(text[i]) + 1;
    if (temp != 0) {
        result.push(temp);
    }
}
return result.join(' ');
}

