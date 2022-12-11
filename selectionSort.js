/**
 * sorts an array of numbers (in place) with selection sort algorithm
 */
function selectionSort(arr) {
    // startIndex moves from left to right
    for (let startIndex = 0; startIndex < arr.length - 1; startIndex++) {
        // for each startIndex, we will find the smallest number
        // between startIndex and the end of the array
        let smallestNumIndex = startIndex;
        for (let j = startIndex + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallestNumIndex]) {
            smallestNumIndex = j
            }
        }
        // swap number at smallest index with the number at startIndex
        let temp = arr[startIndex];
        arr[startIndex] = arr[smallestNumIndex];
        arr[smallestNumIndex] = temp;
    }
}

let tests = [
    [2,5,7,3,1,6,8],
    [124,5437,643,13,734,0,1245],
    [-21,-5,-2,-98,-35],
    [124],
    [-24,-5,123,-8,0],
    []
]

tests.forEach(test => {
    selectionSort(test);
    console.log(test);
})
