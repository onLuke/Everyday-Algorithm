// 배열 A는 집안에 있는 보석의 가치를 나타냅니다.

// 도둑은 본인의 양심상 보석의 합이 K가 넘어가지 않는 선에서 물건을 훔치기로 했습니다.
// 이때 도둑이 훔칠수 있는 보석의 최대 개수가 몇개인지 구하는 함수를 작성하세요.

// 입력
//  보석의 가치를 나타낸 배열 A
//  도둑이 훔칠수 있는 최대 가치 K

// 출력
//  도둑이 훔칠수 있는 최대 보석 개수

// 매개변수 : int[] A, int K
// 리턴타입 : int

function solution(A, K){
  let jewel = A.sort();
  let temp = 0;
  let count = 0;

  for(; count < jewel.length; count++){
    temp += jewel[count];

    if (temp > K){
      break;
    }
  }

  return count;
}
