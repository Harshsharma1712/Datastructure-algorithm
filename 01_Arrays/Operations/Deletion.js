function deleteAt(arr,index){
    let newArr = [];

    for(let i = 0; i<arr.length; i++){

        if(i !== index){
            newArr[newArr.length] = arr[i]
        }
    }

    return newArr
}

const result = deleteAt([10,50,90,-7,8,4],3)

console.log(result);
