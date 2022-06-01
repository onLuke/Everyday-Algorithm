//모든 순열 반환


function permutation2(arr, selectNumber){

    let result = [];

    if(selectNumber == 1) {
        /*  console.log(`최종 depth`);
        console.log(arr); */
        return arr.map(el => [el])
    };

    arr.forEach((fixed, index, array) =>{

    const rest = array.filter((_, innerIdx) => innerIdx !== index);
    /* console.log(`rest`);
    console.log(rest);
    console.log(`index = ${index}, arr = ${arr} selectNumber = ${selectNumber}`); */
    const innerPermutation = permutation(rest, selectNumber-1);
    /* console.log(`innerPermutation = ${innerPermutation}`); */
    const toBePushed = innerPermutation.map(el => [fixed, ...el]);
    /*  console.log("toBePushed");
    console.log(toBePushed); */

    result.push(...toBePushed);

    });

    return result;
};


export {permutation2};
  