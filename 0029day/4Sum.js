var fourSum = function(nums, target) {
    nums.sort((x,y)=> x-y)
    let result = [],
        left,
        right;
    
    for(let i = 0; i<nums.length-3; i++){
        for(let j = i+1; j<nums.length-2; j++){
            left = j+1
            right = nums.length - 1
            
            
            
            while(right>left){
                sum = nums[i] + nums[j] + nums[left] + nums[right]
                
                if(sum === target){
                    result.push([nums[i],nums[j],nums[left],nums[right]])
                    
                    while(nums[left] === nums[left+1]) left++;
                    while(nums[right] === nums[right-1]) right--;
                    right--;
                    left++;
                    
                }else if(sum < target) {
                    left++;
                }else {
                    right--;
                }
            }
            while(nums[j] === nums[j+1]) j++;
        }
        while(nums[i] === nums[i+1]) i++;
    }
    return result
};

console.log(fourSum([1,0,-1,0,-2,2],0))
