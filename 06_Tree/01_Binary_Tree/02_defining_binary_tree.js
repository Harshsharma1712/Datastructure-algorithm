// Note it is just a basic exampe for defining

class Node {
    constructor(item) {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}

let firstNode = new Node(2);
let secondNode = new Node(3);
let thirdNode = new Node(4);
let fourthNode = new Node(5);

firstNode.left = secondNode;
firstNode.right = thirdNode;
secondNode.left = fourthNode;