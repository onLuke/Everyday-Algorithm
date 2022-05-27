//s = 탐색 시작할 원소의 index
//r = 뽑을 원소 개수

function permutation1(arr, s, r){
    if(s == r){
        count++;
        console.log(arr.join(" "));
        return;
    }

    for(let i = s; i < arr.length; i++){
        [arr[s], arr[i]] = [arr[i], arr[s]]; //swap
        permutation(arr, s+1, r);
        [arr[s], arr[i]] = [arr[i], arr[s]]; //원상복귀
    }
}


export {permutation1};