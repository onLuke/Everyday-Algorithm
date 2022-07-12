/* 
A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.

 

Example 1:

Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
Example 3:

Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").
 

Constraints:

1 <= s.length <= 100
s contains only digits and may contain leading zero(s).


*/


var numDecodings = function(s) {
    if (s.length < 1) return 0;
    let memo = [];
    var recur = function (index) {
        console.log(memo)
        console.log(index)
        console.log(memo[index] != null)
        let result = 0
        if (index == s.length) return 1; 
        // 이하 조건을 모두 통과하고 내부 재귀에서 여기에 도달했다면 올바른 디코드 방식인 셈이다.
        //그러므로 1을 리턴해서 result에 더해준다.
        if (memo[index]!=null) return memo[index]; 
        // 이미 들린 인덱스이면 기존에 저장된 
        //그 인덱스번째까지의 디코딩 경우의 수를 반환해서 result에 더한다.
        if (s[index] > 0) { 
            //디코딩 숫자 범위가 1~26이기때문에 0이상이면 모두 한 자리숫자를 이용해서 각각 디코딩 할 수 있다.
            result += recur(index+1); // 그다음 인덱스 번째까지의 경우의 수를 도출
            console.log(`1part index : ${index}`)
            console.log(result)
        }
		
		// 여기부터 2글자 이상씩 묶어서 표현할 수 있는 지 여부를 판별하고 경우에 수에 더한다.
        // 조건1: 0으로 시작하는 문자열이면 안되기 때문에 s[index] 가 0이면 안 된다.
        // 조건2: 2글자를 다른 문자로 디코딩할 지 여부를 판별하므로 그 다음 글자가 없어선 안 된다.
        // 조건3: 2글자 문자열이 27이상이면 안 된다.
        if (s[index] != 0 && s[index+1] != null && s[index]+s[index+1] < 27) {
            //위 조건을 모두 충족한다면,
            result += recur(index+2);
            //2글자를 표현한 하나의 가짓수가 더해진 셈이므로, 재귀를 index+2로 한 번 더 실행.
            //재귀에서 최종 인덱스까지 도달하면 result에 1이 더해질 것이다.
            //내부 재귀(작은 문제)에서 외부 재귀(큰 문제) 로 나오면서, 외부 재귀에서 위 조건을 모두 충족한다면
            //경우의 수 1개가 더 추가되게 된다.
            //예를 들어, 222 는 22 을 v로, 2를 b로 디코드 해서 vb가 될 수도, 반대로 bv가 될 수도 있다.
            //동적계획법이 필요한 이유는, index+2번째까지의 디코드 경우의 수를 이미 구해 뒀다면,
            //외부 재귀에서 그 경우의 수를 다시 계산할 필요가 없기 때문이다.
            //1,2,3 을 2자리 수로 배치하는 경우의 수는, 
            //일의 자리까지 배치하는 경우의 수가 3이면, 십의 자리까지 배치하는 경우의 수를 구할 때,
            //이전에 구한 경우의 수 3을 굳이 다시 계산 할 필요가 없다.
            //동적계획법의 기본 
            console.log(`2part index : ${index}`)
            console.log(result)
            
        }
        memo[index] = result; 
        // 끝에서 index번째까지의 문자열에서 가능한 디코드 가짓수를 모두 구한 셈이다.
        //그러므로 메모에 기록해 두고, 외부 재귀 수행 중 이미 구한 index번째 까지의 가짓수에
        //외부 재귀에서 구한 result값을 더하기 위해서 다시 계산하는 것이 아니라 memo에 저장된 값을 불러오면 된다.
        
        return result;
    }
    return recur(0);
};

numDecodings("1231252")