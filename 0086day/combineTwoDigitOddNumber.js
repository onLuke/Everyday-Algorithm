/* 
[문제 설명]
 한 자리 숫자 배열 array가 주어집니다. 주어진 수를 조합해서 만들 수 있는 두 자리 홀수의 개수를 출력하는 함수 solution을 완성해주세요.

 예를 들어, array [1, 3, 4] 가 주어질 때, 조합할 수 있는 두 자리 홀수는 [13, 31, 41, 43]으로 결과는 4입니다.


[입력 형식]
 - array는 길이가 100 이하의 배열입니다.
 - array는 1 이상 9 이하의 정수로 이루어져 있습니다.


[출력 형식]
 - 조합할 수 있는 두 자리의 홀수 개수를 출력합니다.
*/

function solution(array) {
  let set = new Set()

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i === j) continue

      const num = createNumber(array[i], array[j])
      const isEven = num % 2 === 1
      if (isEven) {
        set.add(num)
      }
    }
  }

  return set.size
}

function createNumber(tenDigits, oneDigit) {
  return tenDigits * 10 + oneDigit
}
