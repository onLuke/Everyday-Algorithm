/* user code */
function Train(number) {
    this.number = number;
    this.next = null;
  }
  
  function LinkedList() {
    this.head = null;
  }
  
  function answer(nums) {
    let ll = new LinkedList();
  
    // 코드 구현 시작 영역

//1. train 객체들을 만든다
//2. 만든 객체들을 연결한다
    let current, prev;

    for(let i = 0; i<nums.length; i++){
    current = new Train(nums[i]);
        
        if(i === 0){
            ll.head = current;
        }else {
            prev.next = current;
        }
        
        prev = current;
    };
  
    // 코드 구현 종료 영역
  
    return ll;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [4, 7, 1, 10, 6],
  
    // TC: 2
    [3, 10, 6, 9, 11, 3, 4],
  
    // TC: 3
    [5, 8, 7, 3, 4, 1, 2, 7, 10, 7],
  ];
  
  LinkedList.prototype.printNode = function () {
    for (let node = this.head; node != null; node = node.next) {
      process.stdout.write(`${node.number} -> `);
    }
    console.log("null");
  };
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    answer(input[i]).printNode();
  }
  