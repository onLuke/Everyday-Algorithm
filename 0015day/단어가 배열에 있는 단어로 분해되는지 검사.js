/* 

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.
*/

var wordBreak = function(s, wordDict) {
    const dp = [true];
    for(let i = 0; i < s.length; i++){
        dp.push(false);
    }
    
    for(let i = 0; i < s.length+1; i++){
        for(let j = 0; j < wordDict.length; j++){
            const word = wordDict[j];
            const word_len = word.length;
            if(dp[i-word_len] && s.slice(i-word_len, i) === word){
                dp[i] = true;
            }
        }
    }
    
    return dp[dp.length-1];
};

console.log(wordBreak("apple",["ap","ple"]));