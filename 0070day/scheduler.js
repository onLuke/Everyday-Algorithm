/* 
CPU의 단일 코어는 한번에 하나의 프로세스만 실행할 수 있습니다.

A : 0초에 3초가 걸리는 작업 요청
B : 1초에 5초가 걸리는 작업 요청
C : 3초에 10초가 걸리는 작업 요청

만약에 위에 같이 요청이 왔을 경우 실행할 수 있는 방법은 A -> B -> C와, A -> C -> B가 있습니다.

두 방법이 작업을 모두 완료하는데 걸리는 평균은 아래와 같습니다.

방법 1
1. A 실행(요청으로 부터 3초 소요)
2. B 실행(1초에서 3초까지 대기한 후 작업을 시작해서 7초 소요)
3. C 실행(3초에서 8초까지 대기한 후 작업을 시작해서 15초 소요)

평균 8.33초

방법 2
1. A 실행(요청으로 부터 3초 소요)
2. C 실행(3초에 작업 시작해서 10초 소요)
3. B 실행(1초에서 14초까지 대기한 후 작업 시작해서 17초 소요)

평균 10초

각 작업에 대해 작업이 요청되는 시점, 작업의 소요시간을 담은 2차원 배열 A가 매개변수로 주어질 때, 가장 작게 걸린 평균 시간을 리턴하는 함수를 작성하세요.

단, 평균 시간의 소수점은 버립니다.


입력 
 프로세스의 요청 시간과 작업시간이 입력된 배열 A

출력
 최소로 걸린 평균 작업시간 (소수점 버림)


매개변수 : int[][] A
리턴타입 : int
 */

function solution(A) {
  let total = A.length;
  let answer = 0;
  let tick =0;
  let queue=[];

  while(true){
      let index = 0;
      while(true){
          if(index >= A.length) break;

          if(A[index][0] <= tick) queue.push(A.splice(index,1)[0])
          else index++;
      }

      if(queue.length===0) {
           if (A.length ===0) break;
           else tick++;
      }else{
          let minIndex = 0;
          for(let i = 1 ; i < queue.length ; i++){
              if(queue[minIndex][1] > queue[i][1]) minIndex=i
          }

          tick += queue[minIndex][1];
          answer += tick - queue[minIndex][0];
          queue.splice(minIndex,1);
      }
  }
  return Math.floor(answer/total);
}