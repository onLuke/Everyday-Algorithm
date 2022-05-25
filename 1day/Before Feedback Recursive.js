/* 일곱 난장이 */

/* user code */
function answer(dwarf) {
  let result = [];

  // 코드 구현 시작 영역

  
  let sumOfFalse = dwarf.reduce((acc, item) => acc+item)-100;
 
  function recursive(dwarf, result, s, idx, r){
    // console.log(`result1 = ${result}`);

    if(s==r)
      if(result.reduce((acc,el) => acc+el) == sumOfFalse){
      return true;
      }else {
        return false;
      };

      for(let i = idx; dwarf.length-i >= r - s; i++){
        //조합은 기준 원소 이후의 원소들만 골라야함.
        //r(고를 갯수) - s(초기값) 보다 length가 크거나 같다는 것은 기준 원소(s) 이후에 원소가 고를 갯수(r)만큼 남아 있을 때 까지만 수행한다는 뜻이다.
        result[s] = dwarf[i];
        if(recursive(dwarf, result, s+1, i+1, r)){
          return;
        }
        recursive(dwarf, result, s+1, i+1, r);
      };
    
  }

    console.log(result);
    recursive(dwarf, result, 0, 0, 2);
    console.log(result);

    result = dwarf.filter(el => result.indexOf(el) === -1);


  // 코드 구현 종료 영역

  return result;
};

/* main code */
let input = [
  // TC: 1
  [1, 5, 6, 7, 10, 12, 19, 29, 33],

  // TC: 2
  [25, 23, 11, 2, 18, 3, 28, 6, 37],

  // TC: 3
  [3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
};
