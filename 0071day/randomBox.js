/* 
배열 A는 랜덤 박스에 들어있는 선물의 개수가 저장되어있습니다.
이때 연속된 박스를 1개 이상 구입하여 K명의 자식들에게 공평하게 선물을 분배 가능한 경우의 수를 구하세요.
단 K는 1이상의 값을 가집니다.

예를들어 랜덤 박스에 선물 개수 정보가 [1, 2, 3, 4, 5, 6] 으로 주어지고 자식수가 4명이라면 아래의 경우의수를 만족합니다.

2 + 3 + 4 + 5 + 6 = 20(5개씩 분배)
3 + 4 + 5 = 12(3개씩 분배)
4 (1개씩 분배)
     
총 3가지 경우의 수가 가능하기 때문에 3을 리턴합니다.
이때 1 + 3 등의 케이스는 연속된 박스가 아니기 때문에 제외됩니다.

입력
 랜덤박스에 들어있는 선물의 개수 정보가 들어있는 배열 A
 자식의 수 K
 
출력
  구매 가능한 랜덤 박스의 수 K

매개변수 : int[] A, int K
리턴타입 : int
*/

function solution(A, K) {
  let answer = 0,
  idx = 0,
  sum = 0;
  for(let i = 0; i < A.length; i++){

    while(idx <= A.length-1){
        sum += A[idx++];
        if(!(sum % K)) answer++;
    }

    idx = i+1;
    sum = 0;
  }  
  return answer;
}