/**

2차원 배열 board와, board 그리드를 순회하며 만들어야 할 단어 word가 입력값으로 들어온다.
board를 순회하며 word를 만들 수 있는 지 true/false로 반환한다.
단 이미 방문한 셀을 다시 방문해서 사용할 수 없다.

 */


 const exist = (board, word) => {
    if (board.length === 0) return false;
  
    const h = board.length;
    const w = board[0].length;
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  
    const go = (x, y, k) => {
        //k == 아래 for문에서 쓰일 카운트 수. 최초 0 임.
      if (board[x][y] !== word[k]) return false;
      if (k === word.length - 1) return true;
  
      board[x][y] = 'visited'; 
        // 방문한 원소는 visited로 표시함. 단, 이후 내부 재귀에서 답을 못 찾으면 
        //이 부분을 원래 원소로 리셋시키고, 다른 방향으로(다른 dir 포인터로) 재탐색을 시작함
      for (const [dx, dy] of dirs) {
        const i = x + dx;
        const j = y + dy;
        if (i >= 0 && i < h && j >= 0 && j < w) {
            //i, j 가 음수가 되거나 board.length 보다 더 길어져서 board를 빠져나가지 않는다면 아래 if문을 실행,
            //그렇지 않으면 continue한 것과 같음
          if (go(i, j, k + 1)) return true;
            //만약 k가 board.length-1 즉 마지막 인덱스에 도달했을 때 일치하느 문자열을 완성했다면 return true,
            //그렇지 않으면 undefined이므로 아래 부분으로 넘어감.
        }
      }
      board[x][y] = word[k]; //위에서 board[x][y] 에 visited 표시 해 준 것을 지우고 이전 k번째 글자로 다시 돌려줌.
        //만약 위 for문의 재귀 내부에서 return하는 if문에 걸리지 않았다면 여기로 넘어오게 되고, 
        //그러면 그 원소를 다시 들러서 이전 재귀에서 다른 방향을 탐색해야 하므로 이 과정이 필요하다.
      return false;
        //현재 재귀가 이 부분에 도달했다면 false를 리턴해서, 다시 일치하는 문자를 찾을 때 까지 이전 재귀로 되돌아간다.
        //혹은 최후까지 못 찾고 이 부분에 도달했으면 return false하게 되고, 그 시작점으로 부터는 word를 만들 수 없는 것을 판별한다.
    };
  
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (go(i, j, 0)) return true;
          //이 반복문에서 i,j는 시작점을 설정하는 것이다.
          //시작점으로부터 위 go함수를 실행시켜 일치하는 문자열을 만들 수 있는 지 검사하기 위함.
      }
    }
  
    return false;
    //여기까지 도달하면 모든 좌표를 시작점으로 해도 word를 만들지 못 했다는 뜻이다.
  };