let node4 = {
    value: 'd',
    next: null,
};

let node3 = {
    value: 'c',
    next: node4,
};

let node2 = {
    value: 'b',
    next: node3,
};

let node1 = {
    value: 'a',
    next: node2,
};

const printList = node => {
    while (node) {
        console.log(node.value);
        node = node.next;
    }
}

// printList(node1);

// returns the node at that index
const getNodeAt = (node, index) => {
    for (let i = 0; i < index; i++) {
        node = node.next;
    }
    return node;
}

// console.log( getNodeAt(node1, 2).value ) // should print c

const removeNodeAt = (node, index) => {
    let previousNode = getNodeAt(node, index - 1);
    let nextNode = getNodeAt(node, index + 1);
    previousNode.next = nextNode;    
}

printList(node1);
console.log("\n")
removeNodeAt(node1, 2);
console.log("\n")
printList(node1);

