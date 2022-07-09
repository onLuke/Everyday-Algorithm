var alienOrder = function (words) {
    if(words.length < 1) return "";

    let charMap = new Map();
    let topology = new Map();
    let result = "";

    for (let word of words) {
        for(let char of word){
            charMap.set(char, 0);
            topology.set(char, new Array());
        }
    }

    for (let i = 0; i < words.length - 1; i++) {
        let firstWord = words[i];
        let secondWord = words[i + 1];

        //Edge Case : input에 abc, ab가 들어올 경우 sorted lexicographically에 맞지 않는다.
        if (firstWord.length > secondWord.length && firstWord.startsWith(secondWord)) {
            return ""; // fail 처리가 필요하다.
        }

        // 모든 char를 순환하면서 edge를 build 한다.
        for (let j = 0; j < Math.min(firstWord.length, secondWord.length); j++) {
            if (firstWord.charAt(j) !== secondWord.charAt(j)) {
                charMap.set(secondWord.charAt(j), charMap.get(secondWord.charAt(j)) + 1);
                topology.get(firstWord.charAt(j)).push(secondWord.charAt(j));
                break;
            }
        }

    }

    let queue = new Array();

    for(let [key,value] of charMap){
        if (value === 0) {
            queue.push(key);
        }
    }

    while (0 < queue.length) {
        let key = queue.shift();

        result += key;

        let neighbors = topology.get(key);

        neighbors.map((item)=>{
            let count = charMap.get(item) - 1;
            charMap.set(item, count);
            if(count === 0){
                queue.push(item);
            }
        });
    }

    if(result.length < charMap.size) return "";

    return result;
};