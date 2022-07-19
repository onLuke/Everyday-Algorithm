/* 
중복없이 이어지는 가장 긴 문자열의 길이를 반환한다.


*/

//중복되지 않은 단어를 순회할 때는 map에 (s[i]:현재index)를 set하고,
//만약 중복된 단어가 등장하면, 그 단어가 이전에 등장했던 index+1 부터 현재 위치까지의 길이와,
//이전까지 중복 문자가 없는 문자열의 길이를 비교해서, 더 긴 것을 반환한다.
//예를 들어 abcadcd 가 문자열이면,
//a가 중복 등장하는 순간, abc까지의 길이와 bca이후중복문자가 없는 문자열까지 계속 길이를 늘려가며 비교한다.
//위 경우에서는 bcad가 abc보다 더 길고, 재등장하는 c를 만났을 때, 
//c가 있던 이전 인덱스 +1 부터 현재 위치 까지의 길이가 3이고, maxLen으로 저장됐던 bcad의 길이인 4가 더 크기 때문에
//가장 긴 중복없는 문자열 서브어레이의 길이는 4가 된다. 


var lengthOfLongestSubstring = function(s) {
    const seen = new Map();
    let start = 0;
    let maxLen = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
        
        seen.set(s[i], i);
        maxLen = Math.max(i - start + 1, maxLen);
    } 
    
    return maxLen;  
};

console.log(lengthOfLongestSubstring("abcabcbb"))