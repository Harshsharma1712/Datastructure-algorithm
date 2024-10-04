class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

//function to insert a new node with the given key
function insert(root, data) {
    if (root === null)
        return new Node(data);

    // Duplicates not allowed 
    if (root.data === data)
        return root;

    if (data < root.data)
        root.left = insert(root.left, data);

    else if (data > root.data) 
        root.right = insert(root.right, data);
    
    return root;
}

// function to do inorder tree traversal

function inOrder(root) {
    if(root !== null) {
        inOrder(root.left);
        console.log(root.data + " ");
        inOrder(root.right);
    }
}

// Creating the following BST
//      50
//     /  \
//    30   70
//   / \   / \
//  20 40 60 80

let root = new Node(50);

root = insert(root, 30);
root = insert(root, 20);
root = insert(root, 40);
root = insert(root, 70);
root = insert(root, 60);
root = insert(root, 80);

inOrder(root);