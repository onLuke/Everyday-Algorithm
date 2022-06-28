/* 
target값을 만들 수 있는 모든 중복이 없는 조합을 반환

*/

var combinationSum2 = function(candidates, target) {
    if(!candidates || candidates.length == 0) return [];
    let res = [];
    candidates.sort((x,y) => x-y);
    //반복문에서 이전 인덱스번째 값이랑 똑같으면 contitnue

    let combination = function(sum, current, index){
        if(sum == target){
            res.push([...current]);
            return;
        }
        for(let i = index; i< candidates.length; i++){
            if(i !== index && candidates[i] === candidates[i-1]) continue;
            //중복값이면 contitnue
            if(sum > target) return;
            current.push(candidates[i]);
            combination(sum+candidates[i], current, i+1);
            current.pop();
        }
    }

    combination(0,[],0);
    
    return res;
};


console.log(combinationSum2([10,1,2,7,6,1,5], 8))