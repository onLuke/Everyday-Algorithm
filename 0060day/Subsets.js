/* 
인풋값으로 1차원 배열이 들어오면, 그 배열의 subset들을 모두 반환한다.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/

var subsets = function(nums) {
    let res = [[]];
    for (const num of nums) {
        const newRes = [];
        for (const sol of res) {
           newRes.push([...sol, num])
        }
        res = [...res, ...newRes];
    }
    
    return res;
};