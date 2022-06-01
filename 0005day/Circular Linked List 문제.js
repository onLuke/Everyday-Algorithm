/* user code */
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function LinkedList() {
    this.head = null;
  }
  
  function answer(n, m, k) {
    let result = [];
  
    // 코드 구현 시작 영역
    
    //1. 음수 미허용
    if(n <= 0 || m <= 0 || k <= 0){
        return null;
    }
    
    //2. Circular Linked List 생성
    let cll = new LinkedList();
    let current, prev;

    for(let i = 1; i<=n; i++){
        current = new Node(i);
        
        if(cll.head === null){
            cll.head = current;
        }else {
            prev.next = current;
        }
        prev = current;
    };

    current.next = cll.head;


    //3. 시작점 m까지 이동
    current = cll.head;

    while(--m){
        prev = current;
        current = current.next;
    }

    //4. m 지점부터 K번째 만큼 순회하며 Node를 삭제, 단, Node가 1개 밖에 남지 않으면,

    let count;
    while(current.next != current) {
        result.push(current.data);
        prev.next = current.next;

        count = k;
        while(count--){
            prev = current;
            current = current.next;
        }
    }

    //5. 마지막 남은 Node를 result에 push
    result.push(current.data);



    // 코드 구현 종료 영역
  
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [8, 2, 3],
  
    // TC: 2
    [10, 2, 3],
  
    // TC: 3
    [20, 5, 7],
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1], input[i][2]));
  }
  