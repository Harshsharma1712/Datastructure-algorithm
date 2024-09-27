// Note:- This is not the effectivee way cauz it has time complicity of 
// O(n^2)

class Node {
    constructor(val)
    {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

// function to find height of tree
function height(root) {
    if(root === null)
        return 0;

    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    if(leftHeight > rightHeight) {
        return (leftHeight + 1);
    } else {
        return (rightHeight + 1);
    }
}

// Print nodes at the current level
function printCurrentLevel(root, level)
{
    if (root == null)
        return;
    if (level == 1)
        console.log(root.data + " ");
    else if (level > 1) {
        printCurrentLevel(root.left, level - 1);
        printCurrentLevel(root.right, level - 1);
    }
}

// Function to print level order traversal of tree
function printLevelOrder(root) {
    let treeHeight = height(root);
    let i;

    for(i = 1; i <= treeHeight; i++){
        printCurrentLevel(root, i);
    }
}

const  root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
printLevelOrder(root);