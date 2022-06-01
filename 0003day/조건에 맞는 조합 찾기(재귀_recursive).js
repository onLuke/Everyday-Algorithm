let result = [];

function getCombination(arr,selectNumber, sum, selectNumberOrigin){
    

    let innerRes = [];
        if(selectNumber == 1) {
            // console.log("arr");
            // console.log(arr);
            return arr.map(el => [el])
    };

    arr.forEach((fixed, index, array)=>{
        if(index == array.length-1 || result.length != 0) return;
        const rest = array.slice(index+1);
        // console.log("rest");
        // console.log(rest);
        // console.log(`index = ${index} selectNumber = ${selectNumber}, array.length = ${array.length}, array = ${array}`);

        const combinations = getCombination(rest, selectNumber - 1, sum, selectNumberOrigin);
        // console.log("combinations");
        // console.log(combinations);

        const attached = combinations.map((el => [fixed,...el]));
        // console.log("attached");
        // console.log(attached);

        innerRes.push(...attached);
        //console.log("innerRes");
        //console.log(innerRes);

        if(selectNumber == selectNumberOrigin){
            //console.log(`innerRes`);
            //console.log(innerRes);
            let findRes = innerRes.find(el => el.reduce((acc,innerItem) => acc+innerItem) == sum)
            if(findRes){
                //console.log(`findRes = ${findRes}`)
                result.push(...findRes);
            }
        }
    });
    return innerRes;
};

const arr = [1,2,3,0,4,5,19,10,94];
getCombination(arr,3,100,3);

console.log(result);
