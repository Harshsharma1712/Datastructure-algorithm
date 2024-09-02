function monotonicIncreasing(nums){
    const stack = []
    const result = []

    // traverse array
    for(let i=0; i<nums.length; i++){
        // While stack is not empty AND top of stack is more
        // than the current element
        while(stack.length > 0 && stack[stack.length - 1] > nums[i]){
            // Pop the top element from the stack
            stack.pop()
        }

        // Push the current element into the stack
        stack.push(nums[i])
    }

     // Construct the result array from the stack
     while (stack.length > 0) {
        result.unshift(stack.pop());
    }

    return result;
}

// Example usage:
const nums = [3, 1, 4, 1, 5, 9, 2, 6];
const result = monotonicIncreasing(nums);
console.log("Monotonic increasing stack:", result);
