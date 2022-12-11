/**
 * sorts array of numbers in place with bubble sort algorithm
 */
function bubbleSort(arr) {
    for (let endIndex = arr.length - 2; endIndex >= 0; endIndex--) {
        // move from 0 to endIndex
        for (let i = 0; i <= endIndex; i++) {
            // if condition applies, swap i and i+1
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
}

// checkin edge-cases
let tests = [
    [1,4,6,2,8,0,1,3,6], 
    [142,62474,4233,7,0,12], // bigger numbers
    [-2,-6,-13,-623,-4,-43,0], // negative number
    [-215,-4,0,21,52,641], // mixed numbers
    [123], // one number
    [] // empty array
]

tests.forEach(test => {
    bubbleSort(test);
    console.log(test);
})