//합계가 특정 값이 되는 조합 찾기


function findCombination(arr, sum, selectNumber) {
  let result = [];

    function combination(arr, sum, selectNumber, selectNumberOrigin){

      let innerRes = [];

      if(selectNumber == 1) {
         /*  console.log(`최종 depth`);
          console.log(arr); */
          return arr.map(el => [el])
      };

      arr.forEach((fixed, index, array) =>{
        if(result.length !== 0 || index === arr.length-1) return;

        let rest = array.slice(index+1);
        /* console.log(`rest`);
        console.log(rest);
        console.log(`index = ${index}, arr = ${arr} selectNumber = ${selectNumber}`); */
        let innerCombination = combination(rest, sum, selectNumber-1, selectNumberOrigin);
        /* console.log(`innerCombination = ${innerCombination}`); */
        let toBePushed = innerCombination.map(el => [fixed, ...el]);
       /*  console.log("toBePushed");
        console.log(toBePushed); */

        innerRes.push(...toBePushed);

      /*   console.log("innerRes");
        console.log(innerRes); */
        
        if(selectNumber == selectNumberOrigin){
          let findRes = innerRes.find(el => el.reduce((acc,innerItem) => acc+innerItem) == sum);
         /*  console.log("findRes");
          console.log(findRes); */
          if(findRes){
          result.push(...findRes);
          return
          };
        };

    });
      return innerRes;
  };

  combination(arr, sum, selectNumber, selectNumber);

  
  return result;
};
  
export {findCombination};