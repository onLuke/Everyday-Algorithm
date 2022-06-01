/* two sum */

/* user code */
function answer(nums, target) {
  // 코드 구현 시작 영역

  let result = [];
  function combination(nums, selectNumber, target, selectNumberOrigin){


    
    let innerRes = [];
    
    if(selectNumber == 1) return nums.map(el => [el]);

    nums.forEach((fixed, index, array) => {
      if(result[0] || index == array.length-1) return;
      
      let rest = array.slice(index+1);
      let innerCombination = combination(rest, selectNumber-1, target, selectNumberOrigin);
      // console.log("innerCombination")
      // console.log(innerCombination)
      let toBePushed = innerCombination.map(el => [fixed, ...el]);
      // console.log("toBePushed")
      // console.log(toBePushed)
      innerRes.push(...toBePushed);
      // console.log("innerRes");
      // console.log(innerRes);


 
    

      if(selectNumber == selectNumberOrigin && result.length == 0){

        const findRes = innerRes.find(el => el.reduce((acc, item) => acc+item)==target);
 
        if(findRes) {
          const mappingRes = findRes.map(el => nums.indexOf(el));
          result.push(...mappingRes);
        }
      }

    })
  }

  combination(nums, 2, target, 2);

  return result;

  // 코드 구현 종료 영역
}

/* main code */
let input = [
  // TC: 1
  [[2, 7, 11, 15], 9],

  // TC: 2
  [[3, 2, 4], 6],

  // TC: 3
  [[3, 3], 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
