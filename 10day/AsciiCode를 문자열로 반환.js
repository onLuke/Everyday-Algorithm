let arr = [65, 83, 67, 73, 73];
 function solution(arr) {
    let result = "";

    arr.forEach(item => {
        result += String.fromCharCode(item)
    });

  

    return result
  }
  
  console.log(solution(arr));