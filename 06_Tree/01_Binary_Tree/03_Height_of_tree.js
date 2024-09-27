class Node {
    constructor(v) {
        this.data = v;
        this.left = null;
        this.right = null;
    }
}

function maxDepth(root) {
    if(root === null)
        return 0;

    // compute the depth of left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // use the larger one
    return Math.max(leftDepth, rightDepth) + 1;
}

/* 
            1
           / \
          2   3
         / \   \
        4   5   6
       /
      7      
*/

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);
root.left.left.left = new Node(7);

console.log(`Height of the tree is: ${maxDepth(root)}`)