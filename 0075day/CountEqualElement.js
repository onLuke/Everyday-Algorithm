/* 
[문제 설명]
 크기가 n인 숫자 배열 nums가 주어집니다. 0 <= a < b < n일 때, nums[a] == nums[b]를 만족하는 a, b 쌍의 개수를 출력하는 함수, solution을 완성해주세요.

 예를 들어, nums가 [2, 5, 6, 3, 2, 6, 6]일 때 결과는 다음과 같습니다.
 - nums[0] == nums[4]
 - nums[2] == nums[5]
 - nums[2] == nums[6]
 - nums[5] == nums[6]

 결과는 4입니다.


[입력 형식]
 - nums는 1 이상 100 이하의 정수로 이루어진 길이가 100 이하의 배열입니다.


[출력 형식]
 - 규칙을 만족하는 a, b 쌍의 개수를 출력합니다.
*/


function solution(nums) {

  return nums.reduce((acc, cur, index, arr) => {
      let elNum = arr.slice(index)
      .filter(item => item === cur)
      .length;
      return acc + elNum - 1;
  }, 0);

}

