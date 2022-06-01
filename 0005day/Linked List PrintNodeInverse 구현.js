/* user code */
function File(number) {
    this.number = number;
    this.next = null;
  }
  
  function LinkedList() {
    this.head = null;
  }
  
  function answer(ll) {
    // 코드 구현 시작 영역
  
    //1. 객체의 순서대로 새로운 객체를 생성한다.
    //2. 단, 각 객체 생성 이후, head가 새로 생성한 객체를 가리키게 하고,
    //새로 생성한 객체의 next는 null이 되게 한다.
    //3. 객체를 새로 생성 할 때 마다 head가 가리키는 node가 변경되며,
    //4. 이전에 생성한 객체의 next는 새로 생성한 객체를 가리킨다.
    //마지막 객체를 찾아서 -> 그 이전 객체의 data = 

    let current = ll.head,
    prev = null,
    next;

    while(current != null){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    ll.head = prev;

    // 코드 구현 종료 영역
  
    return ll;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [7, 3, 1],
  
    // TC: 2
    [4, 6, 9, 1, 3],
  
    // TC: 3
    [3, 4, 1, 2, 7, 9, 6],
  ];
  
  LinkedList.prototype.printNode = function () {
    for (let node = this.head; node != null; node = node.next) {
      process.stdout.write(`${node.number} -> `);
    }
    console.log("null");
  };
  
  LinkedList.prototype.makeFiles = function (files) {
    let current = this.head;
    let node;
    for (let i = 0; i < files.length; i++) {
      node = new File(files[i]);
      node.next = current;
      this.head = node;
  
      current = node;
    }
  };
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
  
    let ll = new LinkedList();
    ll.makeFiles(input[i]);
    answer(ll).printNode();
  }
  
