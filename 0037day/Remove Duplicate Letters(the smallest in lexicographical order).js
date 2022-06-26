/* 
Given a string s, remove duplicate letters so that 
every letter appears once and only once.
You must make sure your result is the smallest 
in lexicographical order among all possible results.

문자열 s에서 중복되는 글자를 제외하고 출력하되, 
"가능한한 사전적 순서값이 가장 작도록" 하는 문자열을 반환

Input: s = "cbacdcbc"
Output: "acdb"

Input: s = "leetcode"
Output: "letcod"

*/


var removeDuplicateLetters = function(s) {
    
    let stack = [];

    for(let i = 0; i< s.length; i++){
        let char = s[i];

        if(stack.indexOf(char) > -1) continue;
        //스택에 문자가 이미 있으면 continue

        while(
            stack.length > 0 && // 빈 스택이 아니고,
            stack[stack.length-1] > char && // 마지막에 쌓인 스택 원소가 s[i] 보다 더 크고,
            s.indexOf(stack[stack.length-1], i) > i // 마지막에 쌓인 스택 원소가 이후에 한 번 더 나온다면,
        ){
            stack.pop();//그 원소를 스택에서 빼 내고,
        }

        stack.push(char);//s[i] 를 push한다
    }

    return stack.join('');
};