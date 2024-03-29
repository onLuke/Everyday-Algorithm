/* 
[문제 설명]
 문자열 s가 주어집니다. s가 올바른 color code인지 확인하는 함수, solution을 완성해주세요.

 color code는 다음과 같은 규칙이 있습니다.
 > color code는 6자리입니다.
 > color code는 0~9, A~F의 조합입니다.

 예를 들어, 'DACC32'의 경우 올바른 color code이며, 'AH9201'의 경우 올바르지 않은 color code입니다.


[제한 사항]
 - 소문자의 경우 올바르지 않은 color code 입니다.


[입력 형식]
 - s는 길이가 1 이상 10 이하인 문자열입니다.
 - s는 영어 대/소문자와 숫자 조합입니다.


[출력 형식]
 - 올바른 color code인지 반환합니다.
 */

 function solution(s) {
  let answer = true;

  if(s.length != 6) return false;

  let splited = s.split("");

  let filter = splited.filter(el => {
      
    let charCode = el.charCodeAt(0)

    if((charCode>=65 && charCode <= 90) && (charCode >= 48 && charCode<= 57)) return true;
    else return false;
  });

  if(filter.length != 0) answer = false;

  return filter.length === 0 ? true : false;
}