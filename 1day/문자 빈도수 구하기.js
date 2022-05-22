/* 숫자 빈도수 구하기 */

/* user code */
function answer(s, e) {
    let result = [];
  
    // 코드 구현 시작 영역
    let arr = [];
    for(i = s; i<=e; i++){
      arr.push(i);
    };
  
  
    let splited = arr.join("").split("");
  
    splited.sort((x,y) => x-y);
    let res = [];
  
    result = "0123456789".split("");
  
    //console.log(result);
    //console.log("splited");
    //console.log(splited);
  
    result = result.map(el => {
      if(splited.indexOf(el)>-1){
      return splited.lastIndexOf(el) - splited.indexOf(el)+1
      }else return 0;
    });
  
  
  
    
  
    // 코드 구현 종료 영역
  
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [129, 137],
  
    // TC: 2
    [1412, 1918],
  
    // TC: 3
    [4159, 9182],
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1]));
  }
  