//모든 순열 반환


function permutation2(arr, selectNumber){

    let result = [];

    if(selectNumber == 1) {
        return arr.map(el => [el])
    };

    arr.forEach((fixed, index, array) =>{

    const rest = array.filter((_, innerIdx) => innerIdx !== index);
    const innerPermutation = permutation(rest, selectNumber-1);
    const toBePushed = innerPermutation.map(el => [fixed, ...el]);
    result.push(...toBePushed);
    });

    return result;
};


export {permutation2};
  