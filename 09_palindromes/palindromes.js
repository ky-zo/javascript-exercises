const palindromes = function (string) {
    let letters = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase().split('')
    let lettersLength = letters.length
    let upperLetter = ''
    let lowerLetter = ''
    let middleLetter = 0
    let result = true
    if (lettersLength%2 === 0) { // No. of letters divisible by 2
        for (i = 0; i < lettersLength/2 && result === true; i++){
            middleLetter = lettersLength/2           
            upperLetter = letters[i];
            lowerLetter = letters[lettersLength-1-i];
            upperLetter === lowerLetter ? true : result = false
        }
    } else { // No. of letters not divisible by 2
        for (i = 0; i != lettersLength-1-i && result === true; i++){
            middleLetter = Math.floor(lettersLength/2);
            upperLetter = letters[i];
            lowerLetter = letters[lettersLength-1-i];
            upperLetter === lowerLetter ? true : result = false
            }
    }
    
    return result 
};

// Do not edit below this line
module.exports = palindromes;
