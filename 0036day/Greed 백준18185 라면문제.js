function solution(len, arr){
    let res = 0,
    temp = 0,
    count = 0;

    for(let i = 0; i< len ; i++){
        if((i+1 < len) && (arr[i+1] >= arr[i])){
            while(arr[i] > 0){
                if((i+2 < len) && (arr[i+2] >= arr[i]) && 0 <= arr[i+1]- arr[i+2]){
                    res += 7;
                    arr[i]--;
                    arr[i+1]--;
                    arr[i+2]--;
                }else if(i + 1 < len){
                    if(i+2 <len){
                        let two = arr[i] >= arr[i+1] - arr[i+2] ? arr[i] : arr[i+1] - arr[i+2];
                        console.log(two)
                        res += two * 5;
                        arr[i] -= two;
                        arr[i+1] -= two;
                        
                    }else{
                        res += arr[i+1] * 5;
                        arr[i] -= arr[i+1];
                        res += arr[i] * 3;
                    }
                    
                }
            }
        }
    
    
    }
    return res
}


solution(4,[2,3,2,1]);