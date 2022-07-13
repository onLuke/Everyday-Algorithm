/* 
문자열 s가 인풋값으로 들어온다.
구성 요소 char의 소문자와 대문자가 모두 있는 문자열을 Nice 한 스트링이라고 한다.
연결된 subString 중 가장 긴 nice 스트링을 반환한다.
단, 가장 긴 서브스트링이 여러 개 라면, 그 중 가장 앞에 있는 서브스트링을 반환한다.

*/


const longestNiceSubstring = (s) => {
    let se = new Set(),
    max = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let sub = s.slice(i, j + 1);
            //시작점 i를 바깥에서 증가시키고 j가 안에서 증가됨
            //시작점에서 j+1까지 sub에 저장하고 
            if (isNice(sub)) {
                //Nice문자열인지 체크
                se.add(sub);
                //맞으면 배열에 저장
                max = Math.max(j-i+1, max)
                //가장 긴 길이의 nice문자열이 2개 이상일 때
                //먼저 발견되는 것을 반환해야 하므로 최대 길이를 기록해야함
            }
        }
    }
    for(let char of se){
        if(char.length === max) return char;
    }
    return '';
};

const isNice = (s) => {
    let lower = new Set();
    let upper = new Set();
    for (const c of s) {
        isLowerCaseLetter(c) ? lower.add(c) : upper.add(c);
        //중복없이 각 문자열을 대문자 소문자로 분류함
    }
    //이하 대소문자 각각 쌍을 맞춰 있는지 판별함
    for (const lo of lower) {
        if (!upper.has(lo.toUpperCase())) return false;
    }
    for (const up of upper) {
        if (!lower.has(up.toLowerCase())) return false;
    }
    return true;
};

const isLowerCaseLetter = (c) => {
    return c.charCodeAt() >= 97 && c.charCodeAt() <= 122;
};
//소문자인지 판별하는 함수


console.log(longestNiceSubstring("YazaAay"))
