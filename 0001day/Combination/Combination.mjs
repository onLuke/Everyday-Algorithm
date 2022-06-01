//모든 조합을 반환

  function combination(arr, result, startIndex, originIdx, selectNumber){
    // console.log(`result1 = ${result}`);

    if(startIndex==selectNumber){
      console.log(result);
      return;
    }

      for(let i = originIdx; arr.length-i >= selectNumber - startIndex; i++){

        // 조합은 기준 원소 이후의 원소들만 골라야함.
        // length가 r(고를 갯수) - s(초기값) 보다 크거나 같다는 것은, 
        // 기준 원소(s) 이후에 원소가 고를 갯수(r)만큼 남아 있을 때 까지만 수행한다는 뜻이다.
        result[startIndex] = arr[i];
        recursive(arr, result, startIndex+1, i+1, selectNumber);

      };
    
  }

let arr = [1,2,3,4,5];
let result = [];
let selectNumber = 3;

recursive(arr, result, 0, 0, selectNumber);


export {combination};







