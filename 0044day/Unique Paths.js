/* 
m행 n열로 이루어진 matrix 2차 배열이 있을 때, [0][0] 위치에서 [m-1][n-1] 로 도달할 수 있는
최단 경로의 개수를 반환한다.

!! 문제 팁 -> [i][j] 까지 최단 경로의 개수는 <[i-1][j] 까지의 최단경로 개수 + [i][j-1] 까지의 최단경로 개수> 이다.
이를 통해 동적 계획법 bottom-up 방식으로 문제를 해결할 수 있다.
*/
var uniquePaths = function(m, n) {
	
    if(m === 0 || n === 0) return 0;
    if(m === 1 || n === 1) return 1;
    
    const dp = Array(m ).fill(
        Array(n).fill(1)
    );
    
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    return dp[m-1][n-1];
};