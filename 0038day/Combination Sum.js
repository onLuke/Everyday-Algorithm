/* 
배열 candidates와 숫자 target이 매개변수로 들어올 때,
합해서 target값이 되는 candidates의 배열 조합을 모두 반환
*/

function combinationSum(candidates, target) {
    let buffer = [],
        result = [];
        
    search(0, target);
    //뒤에 선언된 재귀 함수
    return result;
  
    function search(startIdx, target) {
      if (target === 0) return result.push(buffer.slice());
      //2. target이 0이 되었다는 것은 target을 정확하게 만드는 조합이 buffer에 저장된 것
      //그러므로 buffer를 result에 더함.
      if (target < 0) return;
      //2. 만약 0보다 작은 값이면 target을 못 만들었다는 뜻이므로 재귀 종료
      if (startIdx === candidates.length) return;
      //3. 배열 마지막까지 못 찾았으면 이 재귀에서는 만들 수 있는 조합이 없으므로 return

      buffer.push(candidates[startIdx]);
      //1. 값을 하나씩 넣은 다음, target-넣은값 만큼을 만드는 원소를 찾는다.
      search(startIdx, target - candidates[startIdx]);

      buffer.pop();
      //3. buffer 값 pop한 뒤 그 자리에 다른 원소 값 대입 해서 target을 만들 수 있는지 확인
      search(startIdx + 1, target);
    }
  }