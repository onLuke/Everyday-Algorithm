/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

Input: nums = [1,2,3]
Output: [1,3,2]

Input: nums = [3,2,1]
Output: [1,2,3]


Input: nums = [1,1,5]
Output: [1,5,1]
 * 
 * 
 */



 var nextPermutation = function(nums) {
    const len=nums.length-1;
    //stores the first index and second index for swapping.
    let index;
    let secIndex;
    
    //get the first index
    for(index=len-1;index>=0;index--){
        if(nums[index]<nums[index+1]){
            break;
        }
    }
    //if we don't find first index we don't find second index. we just reverse nums arr.
    //that means if we get [3,2,1] as input then our next permutation is [1,2,3].
    if(index<0){
        nums.reverse();
    }else{
        //find the second index from last.
        //if we find a value from back which is greater than value of index optained.
        for(secIndex=len;secIndex>index;secIndex--){
            if(nums[secIndex]>nums[index]){
                break;
            }
        }
        //swap values of index and secondindex.
        [nums[index],nums[secIndex]]=[nums[secIndex],nums[index]];
        
        //reverse values after the index value till last.
        let low=index+1;
        let high=len;
        while(low<high){
           [ nums[low],nums[high]]=[ nums[high],nums[low]];
            low++;
            high--
        }
    }
    
    
    return nums;
};