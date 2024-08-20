// Binary search in an array 
// Note :- Only for sorted array

function binarySearch(arr, target){

    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex){

        let middleIndex = Math.floor( (leftIndex + rightIndex) / 2 )

        if(target === arr[middleIndex])
            return middleIndex

        if(target < arr[middleIndex])
            rightIndex = middleIndex - 1

        else{
            leftIndex = middleIndex + 1
        }

    }

    return console.log("Element not found");
    
}

const result = binarySearch([1,10,50,90,100], 50)

console.log(`Element found in index: ${result}`);
