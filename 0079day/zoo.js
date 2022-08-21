/* 
[문제 설명]

김제로는 어린이날을 맞아 딸과 함께 동물원에 놀러갔습니다.

아직 어린 딸에게 숫자 공부를 시켜주고 싶은 김제로는 동물을 볼 때마다 공책에 기록하여

동물원 구경을 다 했을 때 가장 많이 봤던 동물은 무엇인지 알려 달라고 했습니다.

이 경우에 저희는 딸의 입장에서, 딸의 노트를 받아서 가장 많이 노출되었던 동물을 찾는 것이 목표입니다.

예를 들어, note = ['monkey', 'monkey', 'lion', 'bird', 'bird', 'bird'] 라고 했을 경우,

monkey가 2번, lion이 1번, bird가 3번 기록되었기 때문에 'bird'를 반환해주면 됩니다.

만약 가장 많이 노출된 동물이 여러 종류이고, 그 노출 횟수가 모두 같다면 알파벳 순으로 빠른 동물을 반환해주면 됩니다.

[제한 사항]

- 배열 note는 알파벳으로 이루어진 동물 이름이 중복하여 포함되어 있습니다.

- 배열 note의 최대 길이는 1000입니다.

- 배열 note는 최소 1개 이상의 동물 이름으로 이루어져 있습니다.

[입력 형식]

- 'note' 배열이 주어집니다

[출력 형식]

- 배열 안에 가장 빈번하게 나왔던 동물 이름을 반환합니다.
*/


function solution(note) {
  let map = new Map(),
  max = 0,
  answer = [];


  for(let el of note){
      map.set(el,map.get(el)+1 || 1);
      max = Math.max(map.get(el) , max)
  }

  for(let item of map){
      if(item[1] == max){
          answer.push(item[0])
      }
  }

  return answer.length === 1 ? answer[0] : answer.sort((x,y) => x.localeCompare(y))[0]; 
}