/* 
배열 strs 가 인풋값으로 들어올 때,
글자의 순서를 서로 바꾸면 같은 글자가 되는 원소들끼리 배열로 묶고,
같은 문자열이 되는 다른 원소가 없다면 1개의 원소를 지닌 배열로, 
위 배열을 모두 합한 2중 배열을 반환한다(Anagrams).
반환하는 배열의 순서는 상관없음.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

*/

var groupAnagrams = function(strs) {
    let m = new Map();
    for (let str of strs) {
        let sorted = str.split("").sort().join("");
        if (m.has(sorted)) m.set(sorted, [...m.get(sorted), str]);
        else m.set(sorted, [str]);
    }
    return [...m.values()];
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))