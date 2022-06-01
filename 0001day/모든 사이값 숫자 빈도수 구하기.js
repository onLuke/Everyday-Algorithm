/* 숫자 빈도수 구하기 */

/* user code */
function answer(s, e) {
    let result = [];
  
    // 코드 구현 시작 영역
    let arr = [];
    for(i = s; i<=e; i++){
      arr.push(i);
    };
    //사이에 존재하는 숫자를 모두 arr에 넣는다
  
    let splited = arr.join("").split("");
    //arr에 들어 간 원소 숫자들을 1자리 씩 나눠서 각 원소로 배치한다.

    splited.sort((x,y) => x-y);
    //0~9까지 정렬
  
    result = "0123456789".split("");
    //map 사용을 위한 0~9까지의 배열 생성
    
    //console.log(result);
    //console.log("splited");
    //console.log(splited);
  
    result = result.map(el => {
      if(splited.indexOf(el)>-1){
      return splited.lastIndexOf(el) - splited.indexOf(el)+1
      }else return 0;

      //splited를 sort했으므로 result의 각 원소 0~9를 가진 제일 끝 index - 제일 앞 index + 1 을 하면 각 숫자의 개수가 반환된다.
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
  