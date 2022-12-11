let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34]

const fibonacciSeq = n => {
    let previous = 0; 
    let current = 1;

    for (let i = 0; i < n; i++) {
        let nextOne = previous + current;
        previous = current;
        current = nextOne;
    } 
    return current;
}


console.log(fibonacciSeq(5));
