/* 나무 그리기 */

/* user code */
function answer(height) {
  let str = "";

  // 코드 구현 시작 영역
  str += "\n";
  const WholeLength = height*2-1;

  for(let i = height-1; i>=0; i--){
    str += " ".repeat(i);
    for(let k = 0; k<WholeLength-i*2; k++){
      str += "*";
    }
    str += " ".repeat(i);
    str +="\n";
  }

  // 코드 구현 종료 영역

  return str;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  7,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
