/* 
1 <= arr.length <= 5 * 104
0 <= arr[i] < arr.length
0 <= start < arr.length

원소값이 0인 인덱스에 도달가능한 지 판단하여 반환
처음 시작은 start 가 index인 위치에서 시작함.
각 지점에서 index + value 혹은 index - value 인 인덱스 위치로 이동할 수 있다.
배열 밖으로는 나갈 수 없다.
 */

var canReach = function(arr, start) {
    const isVisit = [];
    arr.map((_) => {
        isVisit.push(false);
    });
    
    const queue = [];
    queue.push(start);

    isVisit[start] = true;
    while(queue.length != 0){
        const index = queue.pop();
        const value = arr[index];
        if(value === 0){
            return true;
        }
        if(index - value >= 0 && !isVisit[index - value]){
            queue.push(index - value);
            isVisit[index - value] = true;
        }
        if(index + value < arr.length && !isVisit[index + value]){
            queue.push(index + value)
            isVisit[index + value] = true;
        }
    }
    
    return false;
};

console.log(canReach([4,2,3,0,3,1,2], 5));