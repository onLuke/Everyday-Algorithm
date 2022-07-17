/* 
로마문자열이 인풋값으로 들어온다.
이를 숫자로 반환한다.
단, 로마 문자는 더 큰 문자 앞에 더 작은 문자열 값이 있으면 큰 값에서 작은 값 만큼 뺀 값을 표현하는 문자다.

ex) IV == 5-1 === 4

*/


var romanToInt = function(s) {
    let symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
    };
    
    let value = 0;
    for(let i = 0; i < s.length; i+=1){
        symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
    }
    return value
};