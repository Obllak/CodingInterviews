// two lists; both are sorted. Return new list that is the intersection of both

let listA = [2,3,5,8,9];
let listB = [0,1,3,4,6,7,8];
let newList = [];

for (let i = 0; i < listA.length; i++) {
    for (let j = 0; j < listB.length; j++) {
        if (listA[i] === listB[j]) {
            newList.push(listA[i]);
        }
    }
}
console.log(newList);