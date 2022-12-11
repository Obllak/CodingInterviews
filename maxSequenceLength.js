let array = [3, 2, 5, 1, 6, 5, 4, 3, 5, 6, 7, 1, 2, 3, 4, 5, 8, 4]

let maxSequenceLengthDecrease = arr => {
    let counter = 1;
    let bestCountDecrease = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] + 1) {
            counter++ 
        } else {
            counter = 1;
        }
        if (counter > bestCountDecrease) {
            bestCountDecrease = counter;
        }
    }
    return + bestCountDecrease;
};

let maxSequenceLengthIncrease = arr => {
    let counter = 1;
    let bestCountIncrease = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] - 1) {
            counter++ 
        } else {
            counter = 1;
        }
        if (counter > bestCountIncrease) {
            bestCountIncrease = counter;
        }
    }
    return + bestCountIncrease;
};

let resultDecrease = maxSequenceLengthDecrease(array);
let resultIncrease = maxSequenceLengthIncrease(array);

console.log('longest decrease length is: ' + resultDecrease);
console.log('longest increase length is: ' + resultIncrease);