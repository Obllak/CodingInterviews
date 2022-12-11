let listA = [0, 2, 3, 5, 8, 9];
let listB = [1, 3, 4, 6, 7];

let newList;
let i = 0;
let j = 0;

while (i < listA.length && j < listB.length) {
    if (listA[i] > listB[j]) {
        newList.push(B[j]);
        j++;
    } else {
        newList.push(A[i]); 
    }
}