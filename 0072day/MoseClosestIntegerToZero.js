/* 
[문제 설명]
 숫자 배열 arr가 주어집니다. 이 중 0에서 가장 가까운 값을 구하는 함수, solution을 완성해주세요.


[제약 사항]
 - 동일하게 가까운 수가 공존한다면 작은수를 출력합니다.


[입력 형식]
 - arr는 길이가 1 이상 100 이하인 배열입니다.
 - arr의 원소는 -100 이상 100 이하의 정수입니다.


[출력 형식]
 - 0에서 가장 가까운 값을 구합니다.
*/

function solution(arr) {
  let answer = 100;

  for(let item of arr){
      let itemAbs = Math.abs(item);
      if(Math.abs(answer) > itemAbs) answer = item;
      else if (Math.abs(answer) === itemAbs) answer = answer > item ? item : answer
  }
  return answer;
}