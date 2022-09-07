/* 
[문제 설명]

저희는 도시를 계획하는 임무를 맡고, 아파트 건축안을 살펴보던 중 도시의 미관을 위하여 아파트를 항상 오름차순으로 보이도록 층수를 결정하고 싶습니다.

고로 아파트 건축안이 [6, 12, 10]으로 주어졌을 때, 높이 6을 가진 건물과 높이 12을 가진 건물 그리고 높이 10를 가진 건물이 순차적으로 건축된다는 뜻입니다. 이 건축안은 오름차순이 아닙니다.

이 때, 저희는 계획안을 수정하여 각 아파트 높이를 절반씩 줄일 수 있는 능력을 가지고 있습니다.

고로 12의 높이를 가진 건물을 2로 나누어 [6, 6, 10]으로 만들고, 그 뒤에 6의 높이를 가진 첫 번째 건물을 2로 나누어 [3, 6, 10]으로 만든다면, 이에 따르면 저희는 2번의 시도로 아파트를 오름차순으로 만들 수 있었고 이것이 최소 시도로 오름차순을 만드는 방법이었습니다.

아파트 건축안이 주어졌을 때, 최소의 시도로 아파트 건축안을 오름차순으로 만들 수 있는 횟수를 반환해주세요.

[제한 사항]

- 건축안의 길이는 1 이상 30 이하입니다.

- 각 아파트의 높이는 0 이상 100000 이하입니다.

- 2로 나누어 떨어지지 않는 수는 내림하여 계산해주세요.

[입력 형식]

- 건축안 'plans'가 하나의 배열로 주어집니다.

[출력 형식]

- 최소의 시도로 아파트 건축안을 오름차순으로 만들 수 있는 횟수를 반환해주세요.

만들 수 없다면 -1을 반환해주시면 됩니다.
*/

function solution(plans) {
  let answer = 0;

  for (let i = plans.length - 2; i >= 0; i--) {
      if (plans[i + 1] === 0) {
          return -1;
      }
      while (plans[i] >= plans[i + 1]) {
          answer++;
          plans[i] = Math.floor(plans[i] / 2);
      }
  }
  return answer;
}
