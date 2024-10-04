class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

// function to search a key in a BST
function search(root, key) {
    // Base Cases: root is null or key is present at root
    if (root === null || root.key === key)
        return root;

    // Key is greater than root's key
    if (root.key < key)
        return search(root.right, key);

    // Key is smaller than root's key
    return search(root.left, key);
}

let root = new Node(50);
root.left = new Node(30);
root.right = new Node(70);
root.left.left = new Node(20);
root.left.right = new Node(40);
root.right.left = new Node(60);
root.right.right = new Node(80);

console.log(search(root, 19) !== null ? "Found" : "Not Found") 
console.log(search(root, 20) !== null ? "Found" : "Not Found") 
console.log(search(root, 70) ) 