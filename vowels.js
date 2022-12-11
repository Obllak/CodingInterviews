const checkVowels = str => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsInString = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                vowelsInString.push(vowels[j]);
            }
        }
    } return vowelsInString;
}

console.log(checkVowels('Nika'));