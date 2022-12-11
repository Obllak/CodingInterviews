const reverseString = (string) => {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}


// REVERSE EACH WORD IN A SENTENCE:

/* const reverseEachWord = (string) => {
    let endString = '';
    for (let i = 0; string[i] != ' '; i++) {
        console.log(string[i]);
    }
} 
*/

// expect all sentences to end with punctuation mark
const reverseEachWord = (string) => {
    let endString = '';
    let wordStartIndex = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ' || i === string.length - 1) {
            let wordEndIndex = i;
            let reverseWord = reverseString(string.substring(wordStartIndex, wordEndIndex));
            if (wordStartIndex === 0) { // if it is the first word
                reverseWord = reverseWord[0].toUpperCase() + reverseWord.substring(1).toLowerCase(); // fix capitalization
            } else {
                endString += ' ';
            }
            endString += reverseWord;
            wordStartIndex = i + 1;
        }
    }
    endString += string[string.length - 1];
    return endString;
}

console.log(reverseEachWord('Kdo je mali Roni?'));


const reverseOrderOfWords = str => {
    let newStr = '';
    let wordStartIndex = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ' || i === str.length - 1) { // if space or last character
            let wordEndIndex = i;
            let 
        }
    }
}