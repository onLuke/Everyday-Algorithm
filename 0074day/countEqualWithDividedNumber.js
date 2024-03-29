/* 
[문제 설명]
 크기가 n인 숫자 배열 nums와 숫자 d가 주어집니다. 0 <= a < b < n과 같다고 할 때, 아래 규칙을 만족하는 a, b 쌍의 개수를 출력하는 함수, solution을 완성해주세요.

 nums[a] == nums[b] 이면서 nums[a]가 d로 나누어떨어진다.

 예를 들어, nums가 [4, 1, 2, 1, 4]이고, d가 2일 때 다음과 같습니다.
 - nums[0] == nums[4], 4는 2로 나누어떨어진다.
 - nums[1] == nums[3], 1은 2로 나누어떨어지지 않는다.

 결과는 1입니다.


[입력 형식]
 - nums는 1 이상 10 이하의 정수로 이루어진 길이가 100 이하의 배열입니다.
 - d는 1 이상 10 이하의 정수입니다.


[출력 형식]
 - 규칙을 만족하는 a, b 쌍의 개수를 출력합니다.
*/

function solution(nums, d) {
  let answer = 0;

  let countMap = nums.reduce((acc, cur) => {
      acc[cur] = (acc[cur] ||0) +1;
      return acc;
  }, {});


  for(let item in countMap){
    if(item % d === 0) answer += countMap[item] - 1
  }
  
  return answer;
}
