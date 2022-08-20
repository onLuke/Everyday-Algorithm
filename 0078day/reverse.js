/* 
[문제 설명]
문자열 S가 주어지면,
처음으로 나온 알파벳 'X'와 마지막으로 나온 알파벳 'Y'까지의 문자열을 뒤집어서 반환해달라는 요구를 받았습니다

단, 문자열에 'X' 혹은 'Y'가 없으면 입력받았던 문자열 그대로 반환해주면 됩니다.
또한, 문자열 S에 알파벳 'X'와 'Y'는 1개 이상 존재할 수 있습니다.

예를 들어, 주어진 문자열 S가 'AXYA'라면, 예상되는 결과는 'AYXA'입니다.
주어진 문자열 S가 'ABCXAXYABC'라면, 예상되는 결과는 'ABCYXAXABC'입니다.

[제한 사항]
- 문자열 S은 길이가 1 이상 10,000 이하의 문자열입니다.
- 문자열 S는 알파벳 대문자로만 이루어져 있습니다.

[입력 형식]
- 문자열 S가 주어집니다.

[출력 형식]
- 주어진 조건에 맞는 문자열을 반환합니다.
*/

function solution(S) {
  let result = ''

  S_list = S.split("")

  let left = -1
  let right = -1

  // left에 처음으로 찾은 X의 위치
  // right에 마지막으로 찾은 Y의 위치
  for (let [idx, ch] of S_list.entries()) {
      if (ch === 'X' && left === -1) {
          left = idx
      }
      if (ch === 'Y') {
          right = idx
      }
  }

  // 둘 중 하나라도 못찾았을 경우 원래의 문자열 반환
  if (left === -1 || right === -1) {
      result = S
  } else {
      // .split("").reverse().join("")로 문자열 뒤집기
      result = S.substring(0, left) + S.substring(left, right+1).split("").reverse().join("") + S.substring(right+1)
  }

  return result
}