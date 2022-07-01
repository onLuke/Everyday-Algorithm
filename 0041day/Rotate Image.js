/* 
2중 배열을 matrix로 가정하고, matrix를 90도 회전한 2중 배열을 반환한다.
단, 새로운 이중 배열을 다른 메모리에 재할당하면 안 된다. 공간 복잡도는 O(1) 이어야 한다.

*/


var rotate = function(M) {
    let n = M.length, depth = ~~(n / 2)
    for (let i = 0; i < depth; i++) {
        let len = n - 2 * i - 1, opp = n - 1 - i
        for (let j = 0; j < len; j++) {
            let temp = M[i][i+j]
            M[i][i+j] = M[opp-j][i]
            M[opp-j][i] = M[opp][opp-j]
            M[opp][opp-j] = M[i+j][opp]
            M[i+j][opp] = temp
        }
    }
    return M;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))