/* 
순열을 모두 구하되, 중복값이 없는 순열만 반환.
*/


//Map() 으로 구현, 원소 수가 많을 때 더 효율적임

var permuteUnique = function(nums){
    let res = [],
    remain = new Map();

    nums.forEach(el => remain.has(el) ? remain.set(el, remain.get(el)+1) : remain.set(el, 1));

    function dfs(depth, path){
        if(depth === nums.length){
            res.push([...path]);
            return;
        }

        for(let num of remain){
            if(num[1] > 0){
                path.push(num[0]);
                remain.set(num[0], remain.get(num[0])-1);

                dfs(depth+1, path);

                path.pop();
                remain.set(num[0], remain.get(num[0])+1)
            }
        }
    }

    dfs(0,[]);
    return res;
}

/* 
배열로 맵 구현, 원소 수가 10이하처럼 적을 때는 더 효율적임.
*/

var permuteUnique2 = function(nums){
    let res = [],
    remain = [];

    nums.forEach(el => remain[el] ? remain[el]++ : remain[el] = 1);

    function dfs(depth, path){
        if(depth === nums.length){
            res.push([...path]);
            return;
        }

        for(let num in remain){
            if(remain[num] > 0){
                path.push(num);
                remain[num]--;

                dfs(depth+1, path);

                path.pop();
                remain[num]++;
            }
        }
    }

    dfs(0,[]);
    return res;
}

console.log(permuteUnique([1,1,2]))