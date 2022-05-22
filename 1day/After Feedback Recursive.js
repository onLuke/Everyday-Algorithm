/* 일곱 난장이 */

/* user code */
function answer(dwarf, sum) {
  let result = [];

    // 코드 구현 시작 영역
    function combination(arr, selectNumber, sum, selectNumberOrigin){

      let innerRes = [];

      if(selectNumber == 1) {
          // console.log(`최종 depth`);
          // console.log(arr);
          return arr.map(el => [el])
      };

      arr.forEach((fixed, index, array) =>{
        if(result.length == 0 || index == array.length-1) return;

        let rest = array.slice(index+1);
        // console.log(`rest`);
        // console.log(rest);
        // console.log(`index = ${index}, arr = ${arr} selectNumber = ${selectNumber}`);
        let innerCombination = combination(rest, selectNumber-1, sum, selectNumberOrigin);
        // console.log(`innerCombination = ${innerCombination}`);
        let toBePushed = innerCombination.map(el => [fixed, ...el]);
        // console.log("toBePushed");
        // console.log(toBePushed);

        innerRes.push(...toBePushed);
        // console.log(`res`);
        // console.log(res);
        
        if(selectNumber == selectNumberOrigin){
          let findRes = innerRes.find(el => el.reduce((acc,innerItem) => acc+innerItem) == sum);
          if(findRes){
          // console.log(`res = ${res}`);
          result.push(...findRes);
          return
          };
        };

    });
      return innerRes;
  };

  combination(dwarf, 7, sum,7);
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
    console.log(answer(input[i], 100));
  };
  
