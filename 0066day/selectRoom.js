/* 
배열 A에는 각 방마다 탈출하는데 걸리는 시간이 적혀있습니다.
이 방의 구조는 한번 넘어갈때마다 문이 1개씩 늘어나고 각 문 마다 탈출에 걸리는 시간은 모두 다릅니다.

예를들어 배열 A에 아래와 같이 시간 정보가 들어있다고 가정합니다.
A = [[1], [2, 5], [7, 10, 1], [9, 4, 4, 5]]

이를 그림으로 표현하면 아래와 같습니다.
    
    1
   2 5
 7 10 1
9 4  4  5

최상단에서 시작하여 이동할 때는 대각선 아래 방향으로 한 칸 오른쪽 또는 왼쪽으로만 이동이 가능하며 이동했을 때 배열에 주어진 시간만큼 대기한 후 다음 칸으로 이동할 수 있습니다.

이때 최소한의 대기 시간으로 최하단의 방을 탈출하는데 걸리는 시간을 구하는 함수를 작성하세요.

위 그림에서 최단 시간은 1->5->1->4 로 총 11이 됩니다.

입력
 대기시간 정보가 입력된 2차원 배열 A 

출력
 최소 대기 시간 



매개변수 : int[][] A
리턴타입 : A


*/

function solution(A) {
  let arr = [A[0]];
  //1. BFS, DFS ? => DFS. 모든 경로를 다 비교해야 한다. 순간의 최적 선택지가 최적의 경로가 아닐 수 있다.
  //2. leaf node를 제외한 모든 노드의 선택지는 2개
  //3. 가능한 모든 경로를 탐색하며 memo한 다음 경로값의 합을 apply 로 비교한다.

  while(arr.length != A.length){
    arr.push([]);

    for(let i = 0; i < arr.length; i++){
      if(i == 0){
        arr[arr.length-1].push(A[arr.length-1][0] + arr[arr.length-2][0]);
      } else if(i == arr.length-1){
        arr[arr.length-1].push(A[arr.length-1][arr.length-1] + arr[arr.length-2][arr.length-2]);
      } else{
        arr[arr.length-1].push(A[arr.length-1][arr[arr.length-1].length]+Math.min(arr[arr.length-2][arr[arr.length-1].length], arr[arr.length-2][arr[arr.length-1].length-1]));
      }
    }
  }
    return Math.min.apply(null, arr[arr.length-1]);
}
