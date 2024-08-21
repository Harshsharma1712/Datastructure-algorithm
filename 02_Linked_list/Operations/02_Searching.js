// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// function searchKey(head, key){
//     //init curr with head 
//     let curr = head

//     //itrate all over the nodes
//     while(curr != null){
//         // check if curr node value is equal to the key
//         if(curr.data === key){
//             return true
//         } 
//         curr = curr.next

//         // if no node is equal to the key return false
        
//         return false
//     }
// }

// // create a hard coded linked list
// let head = new Node(14)
// head.next = new Node(21)
// head.next.next = new Node(13)
// head.next.next.next = new Node(30)

// let key = 21

// if(searchKey(head, key))
//     console.log("yes");
// else
// console.log("no");



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// class Node {

//     // Constructor to initialize a new node with data
//     constructor(new_data) {
//         this.data = new_data;
//         this.next = null;
//     }
// }

// // Checks whether key is present in linked list
// function searchKey(head, key) {

//     // Initialize curr with the head of linked list
//     let curr = head;

//     // Iterate over all the nodes
//     while (curr !== null) {

//         // If the current node's value is equal to key,
//         // return true
//         if (curr.data === key)
//             return true;

//         // Move to the next node
//         curr = curr.next;
//     }

//     // If there is no node with value as key, return false
//     return false;
// }

// // Driver code

// // Create a hard-coded linked list:
// // 14 -> 21 -> 13 -> 30 -> 10
// let head = new Node(14);
// head.next = new Node(21);
// head.next.next = new Node(13);
// head.next.next.next = new Node(30);
// head.next.next.next.next = new Node(10);

// // Key to search in the linked list
// // let key = 13;

// if (searchKey(head, 50))
//     console.log("Yes");
// else
// console.log("No");

// ++++++++++++++ Recursive Approch +++++++++++++++++++


// Recursive Javascript program to search
// an element in linked list


// A Linked List Node
class Node {

    // Constructor to initialize a new node with data
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
    }
}

// Checks whether the key is present in linked list
function searchKey(head, key) {

    // Base case
    if (head === null) 
        return false;

    // If key is present in current node, return true
    if (head.data === key) 
        return true;

    // Recur for remaining list
    return searchKey(head.next, key);
}

// Create a hard-coded linked list:
// 14 -> 21 -> 13 -> 30 -> 10
let head = new Node(14);
head.next = new Node(21);
head.next.next = new Node(13);
head.next.next.next = new Node(30);
head.next.next.next.next = new Node(10);

// Key to search in the linked list
let key = 14;

if (searchKey(head, key))
console.log("Yes");
else
console.log("No");
