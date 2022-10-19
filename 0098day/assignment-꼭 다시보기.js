/* 
[문제 설명]

제로베이스에서는 수강생들이 제출한 과제를 보고 학습에 대한 집중력을 측정해보고 싶었습니다.

그래서, 수강생들이 과제를 한 기록들을 가지고 와서 이를 판단해보려 합니다.

예를 들어, “AAABBCC” 인 경우, 첫 3분동안 A문제를 풀고, 그 다음 2분동안 B문제, 그 다음 2분동안 C문제를 풀었기 때문에 집중하고 문제를 풀었다고 판단하였습니다.

하지만 “AABBACC”인 경우, 첫 2분동안 A문제를 풀고,

그 다음 2분동안 B문제를 푼 뒤 다시 A문제로 돌아가서 1분동안 풀었기 때문에, 이 수강생은 집중하지 못했다고 추측하자고 했습니다.

이러한 경우들이 배열로 주어지면, 집중한 수강생은 몇 명인지 반환해주세요.

[제한 사항]

- 배열 problems의 최대 길이는 1000입니다.

- 배열 problems안의 원소는 모두 알파벳 대문자로 이루어져 있습니다.

- 문제들은 항상 A-Z 까지의 알파벳 대문자 한 글자입니다.

[입력 형식]

- ‘problems’ 배열 안에 각 수강생들이 문제를 푼 기록이 주어집니다.

[출력 형식]

- 문제의 조건에 따라 집중한 수강생은 몇 명이었는지 반환해주세요.
*/

function solution(problems) {
  let answer = 0

  for (let i in problems) {
      if (checkProblem(problems[i])) {
          answer += 1;
      }
  }

  return answer
}

function checkProblem(pb) {
  result = pb[0]
  for (let i=0; i < pb.length - 1; i++) {
      if (pb[i] != pb[i+1]) {
          result += pb[i+1]
      }
  }

  list_result = result.split("");
  set_result = new Set(list_result);

  if (list_result.length === set_result.size) {
      return true
  }

  return false
}