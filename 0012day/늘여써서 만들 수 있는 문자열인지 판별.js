
//s = "heeellooo", words = ["hello", "hi", "helo"] 일 경우, 
// words에서 s로 늘려쓸 수 있는 문자는 1개이므로 output은 1
// 단, 3번 이상 반복해서 늘려써야함. hello로 heello 불가능.

var expressiveWords = function(S, words) {
    function count(str, i) {
      let start = i;
      while (i + 1 < str.length) {
        if (str[i] !== str[i + 1]) break;
        i++;
      }
      return i - start + 1;
    }
    
    function isStretchy(w) {
      let i = 0, j = 0;
      while (i < w.length && j < S.length) {
        if (w[i] !== S[j]) return false;
        let countA = count(w, i);
        let countB = count(S, j);
        if (countA > countB || (countA < countB && countB < 3)) {
          return false;
        }
        i += countA;
        j += countB;
      }
      return i == w.length && j == S.length;
    }
    
    let ans = 0;
    words.forEach(w => {
      if (isStretchy(w)) ans++;
    });
    return ans;
  };

  let s = "heeellooo";
  let words = ["hello", "hi", "helo"];
  console.log(expressiveWords(s, words));