const arr = [1,2,3,4,5];


function permutation(arr, selectNumber){

    let res = [];
    if(selectNumber==1) return arr.map(item => [item]);
    
    /* 최종 depth 재귀에서 rest 요소를 이중 배열로 반환 */
    
    arr.forEach((fixed, index, array)=>{
        let rest = array.filter(item => item !==fixed);
        console.log("1 : " + rest);
        /* fixed를 제외한 요소를 rest로 지정 */
        
        let innerPermutation = permutation(rest, selectNumber-1);
        console.log("2 : " + innerPermutation);
        /*재귀함수 innerPermutation을 지정, rest의 요소와 선택 갯수가 1씩 감소 */
        
        let tobePushed = innerPermutation.map(el => [fixed, ...el])
        console.log("3 : " + tobePushed);
        /* 최종 재귀에서 받아온 값이 이중배열이므로, 각 요소도 iterable */
        
        res.push(...tobePushed);
       
    })

    return res;
}




function required(arr,requiredValues){
    for(value of requiredValues){
    arr = 
    arr.filter(el => el.includes(value))
    }
    console.log(arr);
    return arr;

};

function required2(arr, requiredValues){
    let res = arr.filter(el => {
        requiredValues.reduce((acc,currentValue) => {
            acc = el.includes(currentValue);
        })
    })
    console.log(res);
    return res;
}

function required3(arr, requiredValues, targetIdx){
        const res = 
        arr.filter(el => requiredValues.includes(el[targetIdx]));    

    console.log(res);
    return res;
};

console.log([1,3].includes([2]));


console.log(permutation(arr, 3).length);









