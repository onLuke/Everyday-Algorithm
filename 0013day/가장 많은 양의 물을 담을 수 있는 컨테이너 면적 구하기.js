/*

배열에 든 원소 순서대로, 각 value에 해당하는 막대가 있다고 가정한다.
각 원소 사이 간격은 1이다.
막대 사이에 최대한으로 물을 담을 수 있는 면적을 구하라.
물이 넘치지 않으려면 막대의 양 끝이 물의 면적과 같거나 더 높아야 할 것이다.

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

*/


var maxArea = function(height) {
    let max = 0;
    let s = 0;
    let e = height.length - 1;
    
    while (e - s > 0) {
        const low = height[e] > height[s] ? height[s] : height[e];
        const area = (e - s) * low;
              
        height[e] > height[s] ? s++ : e--;
        max = max < area ? area : max;
    }
    return max;
};

console.log(
    maxArea([1,8,6,2,5,4,8,3,7])
)