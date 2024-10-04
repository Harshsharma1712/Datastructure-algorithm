/* 
The deletion rule follow:-
the deleted node is replaced by the bottom-most and rightmost node.
eg:- 
            10
           /  \
          20   30
                \
                 40

        Delete(20)

            10
           /  \
          40   30  
*/

class Node {
    constructor(key) {
        this.data = key;
        this.left = null;
        this.right = null;
    }
}

let root;
let temp = root;

// Inorder traversal of a binary tree
function inorder(temp) {
    if(temp === null)
        return;

    inorder(temp.left);
    console.log(temp.data + " ");
    inorder(temp.right)
}

// Function to delete deepest element in binary tree
function deleteDeepest(root, delNode) {
    let q = [];
    q.push(root);

    let temp = null;
}