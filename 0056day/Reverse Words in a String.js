/* 
연결된 배열원소들의 곱 중 최대 값을 반환한다.
단, 배열내에는 음수도 있기 때문에, 이전까지 가장 작은 값이였던 subarray가 또 다른 음수 원소를 만나면 가장 최대값이 될 수 있다.


*/

var maxProduct = function(nums) {
    let prevMax = nums[0];
    let prevMin = nums[0];
    let result = nums[0];
    for (let i=1;i<nums.length;i++) {
        // given the new number, the new maximun can have 3 conditions
        // 1. number(+) * prevMax(+) is the largest
        // 2. number(+) it self is the largest
        // 3. number(-) * prevMin(-) is the largest 
        curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        
        curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

		// updating the prevMax & prevMin, these two may swap locations
        prevMax = curMax
        prevMin = curMin

        result = Math.max(curMax, result);
    }
    return result;
}