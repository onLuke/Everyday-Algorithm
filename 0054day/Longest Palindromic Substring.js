var longestPalindrome = function(s) {
    
	if(s.length <= 1) return s;
	
	// construct a 2D array
    const dp = [...new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false));
	
    let lps = '';
    
	// base case for one character
    for(let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        lps = s[i];
        console.log(lps)
    }
    
	// base case for two characters
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1]) dp[i][i+1] = true;
        if(dp[i][i+1]) lps = s.substring(i, i + 2);
        
    }
    console.log(dp);
    //abba 에서 첫 char과 끝 char 이 같고, 그 사이 문자인 bb가 펠린드롬이므로,
    //이 문자는 펠린드롬 이다. 이 원래를 규칙으로 1작업을 수행한다.
    for(let i = s.length - 1; i >= 0; i--) {
        for(let j = i + 2; j < s.length; j++) {
            dp[i][j] = dp[i+1][j-1] && s[i] === s[j];// 1작업.
            if(dp[i][j]) lps = lps.length < (j - i + 1) ? s.substring(i, j + 1) : lps;
            // 만약 1작업에 의해 해당 원소가 true로 변경됐다면, 
            //lps에 펠린드롬으로 확정된 문자열을 할당하되,
            //만약 확정된 문자열의 길이(j-i+1)가 기존에 lps에 할당된 문자열의 길이보다 더 클 때만 할당한다. 
            console.log(dp)
        }

        /* 
        최종 dp는 
        [
        [ true, false, true, false, true, false ],
        [ false, true, false, true, false, false ],
        [ false, false, true, false, true, false ],
        [ false, false, false, true, false, false ],
        [ false, false, false, false, true, false ],
        [ false, false, false, false, false, false ]
        ]
        가 되는데, 이는
        
        [[ true, false, true, false, true(0부터 4까지 문자열이 펠린드롬이다 #1), false ],
        [ false, true, false, true(1부터 3까지 문자열이 펠린드롬이다#2), false, false ],
        [ false, false, true, false, true, false ],
        [ false, false, false, true, false, false ],
        [ false, false, false, false, true, false ],
        [ false, false, false, false, false, false ]]
        
        와 같이 몇번째 까지가 펠린드롬인 지 나타내는 dp가 된다.

        #1이, 즉 0부터 4까지 펠린드롬임을 알아내기 위해
        #2이, 즉 1부터 3까지 문자열이 펠린드롬이면서 idx 0인 char과 idx 4 인 char이 같으면 이것을 펠린드롬으로 확정한다.
        이를 통해 bottom-up 방식
        (사이 문자열이 펠린드롬이다 == 작은문제, 앞뒤가 같으면서 사이 문자열이 펠린드롬이면 그 문자도 펠린드롬이다 == 상위 문제)
        DP 구현이 가능해지는 것이다
        */
    }
    
    return lps;
}


console.log(longestPalindrome("babab"))