function solution(s) {

    const words = ['zero','one','two','three','four','five','six','seven', 'eight','nine'];
    
    return Number(words.reduce((acc, word, index) => acc.replace(new RegExp(word, "g"), index), s));
}



function solution2(s){
    let numbers = ['zero','one','two','three','four','five','six','seven', 'eight','nine'];
    let answer = s;
    for(let i =0; i<numbers.length; i++){
        let arr = answer.split(numbers[i]);
        arr.push(null);
        answer = arr.join(i);
    }
    return answer;
}
console.log(solution2("onetwo23"))

let str = "onetwo23";
let arr = str.split("two");

console.log(arr);

console.log(arr.join("2"))