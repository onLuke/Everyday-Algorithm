/* 
[문제 설명]
 문자열 배열 array와 문자열 s가 주어집니다. 이때, s의 접미사가 되는 array의 요소의 개수를 출력하는 함수, solution을 완성해주세요.

 예를 들어, array ['er', 'r', 've']와 s 'naver'가 주어질 때, 일치하는 접미사는 'er', 'r' 2개입니다.


[입력 형식]
 - array는 길이가 100 이하의 배열입니다.
 - array의 요소는 길이가 1 이상 100 이하의 문자열입니다.
 - array의 요소는 알파벳 소문자로 구성됩니다.
 - s는 길이가 1 이상 100 이하의 문자열입니다.
 - s는 알파벳 소문자로 구성됩니다.


[출력 형식]
 - 접미사의 개수를 출력합니다.

*/

function solution(array, s) {
  let result = 0

  for (let i = 0; i < array.length; i++) {
    const postfix = array[i]
    const subPostText = s.substring(s.length - postfix.length, s.length)
    if (subPostText === postfix) {
      result++
    }
  }

  return result
}
