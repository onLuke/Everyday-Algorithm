/* [문제 설명]
int 배열 array가 주어집니다. array는 숫자가 오름차순으로 정렬되어 있습니다. array와 동일한 배열 newArray를 다음 규칙에 따라 생성합니다.

- 1부터 100까지 int 배열 list가 주어집니다.
- 'In' : list의 첫번째 값을 newArray 마지막 값으로 추가합니다.
- 'Out' : newArray의 마지막 값을 제거합니다.
- 'End' : 작업을 종료합니다.

배열 array와 같은 newArray를 생성하기 위해 수행해야하는 기능을 배열로 출력하는 함수, solution을 완성해주세요.

예를 들어, array [1, 3, 4] 가 주어질 때, 결과는 다음과 같습니다.
1부터 100까지 순회하며, 첫번 째로 수행하는 기능은 'In' 으로 newArray는 [1] 입니다.
두번째로 수행하는 기능은 'In' 으로 newArray는 [1, 2] 입니다.
세번째로 수행하는 기능은 'Out' 으로 newArray는 [1] 입니다.
네번째로 수행하는 기능은 'In' 으로 newArray는 [1, 3] 입니다.
다섯번째로 수행하는 기능은 'In' 으로 newArray는 [1, 3, 4] 입니다.
여섯번째로 수행하는 기능은 'End' 로 작업을 종료합니다.

수행한 기능 결과는 ['In', 'In', 'Out', 'In', 'In', 'End'] 입니다.

[입력 형식]
- array는 길이가 100 이하의 배열입니다.
- array는 1이상 100 이하의 자연수로 이루어져 있습니다.

[출력 형식]
- 주어진 배열 array와 동일한 배열을 생성하기 위한, 최소한의 기능 수행 방법을 배열로 출력합니다.
*/


function solution(array) {
  const IN = 'In'
  const OUT = 'Out'
  const END = 'End'

  const result = []

  for (let num = 1; num <= 100; num++) {
    if (array.length === 0) break

    const hasNumber = array[0] === num
    if (hasNumber) {
      array.shift()
      result.push(IN)
    } else {
      result.push(IN)
      result.push(OUT)
    }
  }

  result.push(END)
  return result
}