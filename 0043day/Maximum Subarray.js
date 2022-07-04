/* 


*/

function maxSubArray(nums) {
    let max = nums[0], 
    pre = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        pre = Math.max(nums[i], pre + nums[i]);
        max = Math.max(pre, max);
    } 
    return max;
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))


