var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function caesarCipher(str, num) {
    num = num % 26;
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newStr = '';

    for(let i = 0; i < str.length; i++) {
        var currentLetter = str[i];
        if(currentLetter === ' ') {
            newStr += currentLetter;
            continue;
        }
        if(currentLetter === Number){
            newStr += currentLetter;
            continue;
        }
        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = newIndex + 26;
        newStr += alphabet[newIndex];
    }
    console.log(newStr)
    return newStr;

}

caesarCipher(input, shift)