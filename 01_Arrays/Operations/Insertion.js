function insertAt(arr, index, element){
    let newArr = [];

    for(let i = 0; i < arr.length; i++){

        if(i === index)
            newArr[newArr.length] = element

        newArr[newArr.length] = arr[i]
    }
    // If the index is at last position

    if(index >= arr.length){
        newArr[newArr.length] = element
    }

    return newArr
}

const result = insertAt([1,2,3,4], 2, 40)

console.log(result);
