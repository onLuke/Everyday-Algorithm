/* 
생일잔치에 친구들을 초대해서 잔치를 하려고 합니다.
요리를 잘 하지 못해서 배달을 하려고 하는데 배달 가능한 요리 목록들중 친구들의 취향에 따라 못먹는 음식이 있습니다.

모든 친구들의 적어도 한가지 이상의 음식을 먹을수 있도록 주문하기 위한 주문 방법중 요리 개수가 가장 적은 경우의 음식 개수를 리턴하는 함수를 작성하세요.

입력
 친구들의 이름이 들어있는 배열 Frineds
 각 메뉴별로 음식을 먹을수 있는 친구들의 이름이 적힌 2차원 배열 Taste

출력
 친구들의 취향을 만족 시키는 최소한의 음식 주문 개수

예를들어 아래의 매개변수가 입력 되었을 때에는 4번 메뉴(bob, bobby)와 6번 메뉴(andrew, ant)를 주문시 친구 4명의 취향을 모두 만족 시키기 때문에 최소 주문 수는 2개가 된다.
 Friends = ['bob', 'andrew', 'bobby', 'ant']
 Taste = [['bobby', 'ant'], ['bob', 'ant'], ['bob'], ['bob', 'bobby'] ,['andrew', 'bobby'], ['andrew', 'ant']]



매개변수 : String[] Friends, String[][] Taste
리턴타입 : int
*/

function search(edible, caneat, eater, chosen, best){
  if (best <= chosen) return best

  let first = 0

  while (first < edible.length && 0 < edible[first]) first += 1;
  if (first == edible.length){
    best = Math.min(best,chosen);
    return best;
  }

  for (let i in caneat[first]){

    let food=caneat[first][i];
    for (let j in eater[food]){
      edible[eater[food][j]]+=1
    }

    best =  search(edible, caneat, eater, chosen+1, best)
    //console.log("2 ," + best);

    for (let j in eater[food]){
      edible[eater[food][j]]-=1
    }

  }

    return best
}

function solution(Friends, Taste){
  let best    = Taste.length;
  let edible  = new Array(Friends.length);
  let caneat  = new Array(Friends.length);
  let eater   = new Array(Taste.length);
  let dict    = new Map();

  edible.fill(0);
  eater.fill([]);

  for(let i = 0; i < caneat.length; i++){
    caneat[i] = [];
  }

  for(let i = 0; i <eater.length; i++){
    eater[i] = [];
  }

  for (let i = 0; i < Friends.length; i++){
    dict.set(Friends[i], i);
  }

  for (let i = 0; i < Taste.length; i++){
    for (let j = 0; j < Taste[i].length; j++){
      caneat[dict.get(Taste[i][j])].push(i);
      eater[i].push(dict.get(Taste[i][j]));
    }
  }

  return search(edible, caneat, eater, 0, best)
}