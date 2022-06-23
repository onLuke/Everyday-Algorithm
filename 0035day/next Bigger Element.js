/* 
nums1은 nums2의 subset이다.
nums1의 각 원소가 nums2에 각각 있으며, 
nums2에서 각 원소보다 뒤에 있는 원소 중 가장 가까우면서, 더 큰 원소를 배열에 담아 출력.
만약 더 큰 원소가 뒤에 없으면 -1을 넣는다.


*/


var nextGreaterElement = function(nums1, nums2) {
    return nums1.map(el => {
        let idx = nums2.indexOf(el);
        
        if(idx > -1){
            while(nums2[++idx] <= el);
            
            return idx >= nums2.length ? -1 : nums2[idx];  
        }
                    
    })
};

console.log(nextGreaterElement([4,1,2],[1,3,4,2]))




var nextGreaterElement = function(nums1, nums2) {

    return nums1.map(el => {
        let idx = nums2.indexOf(el);
        
        if(idx > -1){
            while(nums2[++idx] < el)
            return idx >= nums2.length ? -1 : nums2[idx];  
        }
                    
    })
};
