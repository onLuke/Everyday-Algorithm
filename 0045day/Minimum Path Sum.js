/* 
2차원 배열이 주어진다.
2차원 배열이 Matrix라고 가정하고,
가장 오른쪽 아래까지 가면서 지나온 값의 합이 최소값이 되는 Path를 반환한다.

! 문제 팁 - Unique Path와 마찬가지로 어떤 지점으로 가는 비용도 이전 지점까지 이동한 비용에 현재 위치의 비용을 더한 값이다.
그러므로 행과 열 끝에 각각 그 지점까지 가기 위해 얼마의 비용이 필요한 지 계산하여 대입한 뒤,
그 내부의 각 지점에 대한 필요 거리가 얼마인지 DP Bottom-up 방식으로 계산한다.
*/



var minPathSum = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    
    for(let i=1; i<n; i++) {
        grid[i][0] += grid[i-1][0];
    }
    //Matrix의 0번째 열의 각 행까지의 거리 비용을 계산 후 대입한다.
    
    for(let j=1; j<m; j++) {
        grid[0][j] += grid[0][j-1];
    }
    //Matrix의 0번째 행의 각 열까지의 거리 비용을 계산 후 대입한다.
    
    
        //0번째 행, 0번 째 열까지 가는 거리 비용이 모두 계산 되었으므로 bottom-up방식으로 
        //0번째에 근접한 원소까지의 거리를 차례로 산출해 나간다.
    for(let i=1; i<n; i++) {
        for(let j=1; j<m; j++) {
            grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
        }
    }
    return grid[n-1][m-1];
};


