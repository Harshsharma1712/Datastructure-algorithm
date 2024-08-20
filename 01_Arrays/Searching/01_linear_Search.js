// Linear Search in an array

function linearSearch(arr, target){
    
    for(let i = 0; i<arr.length; i++){

        if(arr[i] === target)
            return i

    }

    
    return console.log("Element not found");
    
}

console.log(linearSearch([10,50,30,9,-8] , 7))

// Time complecity of linear search is O(n)
// Space complecity of linear searc is O(1)