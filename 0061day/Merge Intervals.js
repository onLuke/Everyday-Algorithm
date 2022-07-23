/* 
2차원 배열이 입력값으로 들어온다.
2차원 배열의 각 원소배열은 [start, end] 로 이뤄져 있다.
[start,end] 의 범위가 겹쳐지면 두 배열을 merge하고 그렇지 않으면 그대로 유지한 2차원 배열을 반환한다.



*/


var merge = function(intervals) {
    
    
    if(intervals.length) return intervals;
    
    intervals.sort((x,y) => x[0] - y[0]);
    let res = [];
    

    
    for(let i = 0; i<intervals.length-1; i++){
        min = intervals[i][0];
        max = intervals[i][1]
        while(i < intervals.length-1 && intervals[i][1] >= intervals[i+1][0]){
            min = Math.min(intervals[i+1][0], min)
            max = Math.max(intervals[i+1][1], max)
            i++;
        }
        res.push([min, max]);
    } 
    return res;
};