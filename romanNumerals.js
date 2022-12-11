let one = "I";
let five = "V";
let ten = "X";
let fifty = "L";
let hundred = "C";

function romanOrder(string) {
    let result = 0;
    result = convertToDigit(string[string.length - 1]); // convertToDigit(string[string.length - 1]) convertToDigit("X")
    for (let i = string.length - 2; i >= 0; i--) {
        if (convertToDigit(string[i]) >= convertToDigit(string[i + 1])) {
            result = result + convertToDigit(string[i]);
        } else {
            result = result - convertToDigit(string[i]);
        }
    } 
    return result;
}

function convertToDigit(character) {
    if (character == one) return 1;
    if (character == five) return 5;
    if (character == ten) return 10;
    if (character == fifty) return 50;
    if (character == hundred) return 100;
}

console.log(romanOrder("XCIX"));