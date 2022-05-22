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
      // console.log(`result4 = ${result}`)
      return 1;
      }
      else {
        // console.log(`result3 = ${result}`);
        return 0;
      };

      for(let i = idx; dwarf.length-i >= r - s; i++){
        if(s==0){
          // console.log(`!!! 시작 부분 result = ${result}`);
        }
        result[s] = dwarf[i];
        // console.log(`result2 = ${result}`);
        if(recursive(dwarf, result, s+1, i+1, r)){
          return 1;
        }
        recursive(dwarf, result, s+1, i+1, r);
      };
    
  }
  
    recursive(dwarf, result, 0, 0, 2);

    result = dwarf.filter(el => result.indexOf(el) == -1);


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
