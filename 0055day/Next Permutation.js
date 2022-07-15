/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    //1. 배열의 끝에서부터 오름차순이 발생하는 위치를 찾는다. 
    //[1,2,1,5,6] 이라면 index3에서 가장 마지막 오름차순이 발생했다. 
    //2. 1에서 찾은 위치의 원소값보다 더 큰 값을 findLarger 함수로 찾느다.
    //1에서 찾은 위치 앞에 원소들은 오름차순이 존재하지 않으므로 끝에서부터 최초로 발견되는 nums[i]가 
    //i 위치 이후의 원소들 중 nums[i]보다 가장 적은 차이값으로 더 큰 원소가 된다.
    //3. 찾은 larger과 nums[i] 원소를 스왑한다.
    //4. i+1 에서 배열의 끝부분까지, 시작부분, 끝부분 한 쌍씩 짝을 지어 reverse한다.
    
//--------------functions---------------//
    const findLarger = function(idx){
        for(let i = nums.length-1; i > idx; i--){
            if(nums[i] > nums[idx]) return i;
        }
    }
    
    const swap = (i, idx) => {
        [nums[i], nums[idx]] = [nums[idx], nums[i]]
    }
    
    const reSort = (start, end) => {
        while(start < end){
            swap(start, end);
            start++;
            end--;
        }
    }

//-----------implement---------------------//
    
    for(let cur = nums.length-2; cur >= 0; cur--){
        if(nums[cur] < nums[cur+1]){
            let larger = findLarger(cur);
            swap(cur, larger);
            reSort(cur+1, nums.length-1);
            return nums;            
        }
    }
    return nums.reverse();
};