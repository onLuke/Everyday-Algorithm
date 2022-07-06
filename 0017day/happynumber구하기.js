/* 
각 자리수의 제곱을 더한 값을 구하는 과정을 반복하여
결국 1에 도달하는 숫자를 happy number라고 부른다.
예를 들어 13은 1의제곱 + 3의제곱 = 10 이고 
1의제곱 + 0의 제곱 = 1 이므로 happy number이다.

인풋값 정수 n이 happy number가 맞는 지 true/false로 반환한다.
*/

var isHappy = function(n) {
    const set = [n];
    while(n !== 1){
        n = getSumOfSquares(n);
        if(set.indexOf(n) !== -1)
            return false;
        set.push(n);
    }
    return true;
};

const getSumOfSquares = n => {
    const str_n = String(n);
    let sum = 0;
    for(let i = 0; i < str_n.length; i++){
        sum += Math.pow(parseInt(str_n[i]),2);
    }
    return sum;
}