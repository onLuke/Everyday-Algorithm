/*
1 <= nums.length <= 104
0 <= nums[i] <= 105

*/


const canJump = function(nums){
    if(nums.length == 1) return true;
    let dest = nums.length-1;

    for(let i = nums.length - 2; i>=0; i--){
        if(nums[i] + i >= dest) dest = i;
    }

    if(dest == 0) return true;
    return false;
}

console.log(canJump([2,3,1,1,4]));