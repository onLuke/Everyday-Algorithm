/* 
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Input: nums = [0,0,0], target = 1
Output: 0

*/




var threeSumClosest = function(nums, target) {
    nums.sort((x,y) => x-y)
    let len = nums.length,
        temp,
        left,
        right;
        
    
    for(let i =0; i<nums.length - 2; i++){
        left = i + 1
        right = len-1
        
        let sum = nums[i] + nums[left] + nums[right];
        
        if(temp === undefined || Math.abs(target-temp) > Math.abs(target-sum)) temp = sum;
            
        
        
        while(right>left){
            if(right > left && sum>target) right--;
            else if(right > left && sum<target) left++;

            if(right == left) break;
            
            sum = nums[i] + nums[left] + nums[right]
            if(Math.abs(target-temp) > Math.abs(target-sum)) temp = sum;
            else continue
            
            if(temp == target) return temp;

        }
        
    }
    return temp
};