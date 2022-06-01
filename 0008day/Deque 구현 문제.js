/* 데크 만들기 */

function Deque(array = []){
  this.array = array;
};

/* user code */
function answer(cmds) {
  let result = [];

  // 코드 구현 시작 영역

  
  let arg,
  dq = new Deque();


  for(let i = 0; i<cmds.length; i++){
    arg = cmds[i].split(" ");


    switch(arg[0]){
  
      case "push_front":
        dq.array.unshift(Number(arg[1]));
        break;
  
      case "push_back":
        dq.array.push(Number(arg[1]));
        break;

      case "pop_front":
        if(dq.array.length == 0) result.push(-1);
        else result.push(dq.array.shift());
        break;    

      case "pop_back":
        if(dq.array.length == 0) result.push(-1);
        else result.push(dq.array.pop());
        break;

      case "empty":
        if(dq.array.length == 0) result.push(1);
        else result.push(0);
        break;

      case "size":
        result.push(dq.array.length);
        break;

      case "front":
        if(dq.array.length == 0) result.push(-1);
        else result.push(dq.array[0]);
        break;

      case "back":
        if(dq.array.length == 0) result.push(-1);
        else result.push(dq.array[dq.array.length-1]);
        break;
    };

  }

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  ["push_back 1", "push_front 2", "pop_front", "pop_back", "pop_front"],

  // TC: 2
  [
    "push_back 3",
    "push_front 4",
    "push_back 5",
    "push_front 6",
    "front",
    "back",
    "pop_front",
    "size",
    "empty",
  ],

  // TC: 3
  [
    "push_back 7",
    "push_front 8",
    "front",
    "back",
    "size",
    "empty",
    "pop_front",
    "pop_back",
    "pop_front",
    "size",
    "empty",
    "pop_back",
    "push_front 9",
    "empty",
    "front",
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
