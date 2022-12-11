let array = ['a', 'b', 'a', 'b', 'b', 'b', 'd', 'd', 'g', 'd', 'd', 'd'];

let mostCommonLetter = arr => {
    let bestCount = 0;
    let bestLetter = '';
    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                counter++;
            }
        }
        //console.log(arr[i] + ' ' + counter);
        if (counter > bestCount) {
            bestCount = counter;
            bestLetter = arr[i];
        }
    } 
    return bestLetter;
};

console.log(mostCommonLetter(array));
