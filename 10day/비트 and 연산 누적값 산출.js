/*
[문제 설명]
 n개의 2진수가 주어질 때, 이를 and 연산한 결과를 10진수 숫자로 변환해서 출력하는 함수, solution을 완성해주세요.

 예를 들어, arr ['10110', '1010', '11110']가 있을 때, and 연산한 결과는 이진수로 '10'이고, 10진수로 변환하면 2입니다.


[입력 형식]
 - arr는 길이가 1 이상 5 이하의 배열입니다.
 - arr의 요소는 '0', '1'로 이루어진 길이가 1 이상 10 이하의 문자열입니다.


[출력 형식]
 - and 연산한 결과를 10진수로 출력합니다.

*/


function solution(arr) {
  if (!arr.length) return 0

  return arr.map(c => parseInt(c, 2))
    .reduce((pre, cur) => pre & cur)
}

export default solution