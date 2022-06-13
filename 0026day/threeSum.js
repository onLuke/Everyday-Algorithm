/* 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Input: nums = []
Output: []

Input: nums = [0]
Output: []

*/





var threeSum = function(nums) {
    nums.sort((x,y) => x-y);
    let res = [],
        len = nums.length,
        left,
        right,
        sum;
    
    for(let i = 0; i<nums.length-2; i++){
        if(nums[i] > 0) break;
        if(nums[i] == nums[i-1]) continue;
        
        left = i+1;
        right = len-1;
        
        while(left < right){
            sum = nums[i] + nums[left] + nums[right];
            if(sum > 0) right--;
            else if(sum < 0) left++;
            else{
                res.push([nums[i], nums[left], nums[right]])
                while(left < right && nums[left] == nums[left+1]) left++;
                while(left < right && nums[right] == nums[right-1]) right--;
                left++;
                right--;
            }
        }
        
        
    }
    return res
};