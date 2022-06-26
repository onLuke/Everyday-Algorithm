function solution(len, array){
    array.sort((x,y) => x-y);
    
    return array.reduce((acc,_,idx,arr) => {
        return acc + arr.slice(0, idx+1).reduce((sum, el) => sum+el,0)
    },0)
}
