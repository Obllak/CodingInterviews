let arr = [3, 6, 7, 13, 25, 29, 35, 55, 67, 88, 92];

/**
 * Performs a binary search on an sorted array of numbers
 * @param num the number to search for
 * @returns the index of that number in the array if it exists, otherwise returns null
 */
function binarySearch(num) {
    let startIndex = 0; // 0
    let endIndex = arr.length - 1; // 1
    while (startIndex <= endIndex) {
        let middle = Math.round((startIndex + endIndex) / 2);
        if (arr[middle] < num) {
            startIndex = middle + 1;
        } else if (arr[middle] > num) {
            endIndex = middle - 1;
        } else {
            return middle;
        }
    }
    return null;
}

for (let i = 0; i < arr.length; i++) {
    console.log(i === binarySearch(arr[i]));
}

console.log(binarySearch(103));
console.log(binarySearch(-3));
console.log(binarySearch(63));
