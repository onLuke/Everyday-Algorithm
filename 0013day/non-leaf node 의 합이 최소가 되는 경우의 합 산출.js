/*
2 <= arr.length <= 40
1 <= arr[i] <= 15
It is guaranteed that the answer fits into a 32-bit signed integer (i.e., it is less than 231).
*/

var mctFromLeafValues = function(arr) {
    let res = 0;
    
    while(arr.length > 1){
        let idx = 0;
        let minParent = 226; 
        //조건에서 배열의 각 원소가 15이하, 1이상이라고 했으므로, 두 수의 곱 최대는 225, 226을 넘지 못함
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] * arr[i + 1] < minParent){
                idx = i;
                minParent = arr[i] * arr[i + 1];
                //부모 노드 값 중 최소값 산출
            }
        }
        res += minParent;
        if(arr[idx] < arr[idx + 1]){
            arr.splice(idx, 1);
        }else{
            arr.splice(idx + 1, 1);
        }
        //왼쪽, 오른쪽 서브트리에서 최대 리프노드끼리 곱하므로 더 작은 리프노드는 필요없음
    }

    return res;
};

console.log(mctFromLeafValues([6,2,4]))