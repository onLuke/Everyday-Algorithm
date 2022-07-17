/* 
인풋값으로 32비트 정수가 들어온다.
정수의 각 자리수를 거꾸로 하여 반환한다.
단, 거꾸로 한 값이 32비트 범위(-2^31 <= value <= 2^31 -1)를 넘어서면 0을 반환한다.
*/


function reverse(x) {
    const isNegative = x < 0;
      //x자체를 바꿀 것이므로 인풋값이 음수인 지 미리 판별한다.
    x = Math.abs(x);
    let ret = 0;
    while (x > 0) {
      const num = x % 10;
      x = Math.floor(x / 10);
      ret *= 10;
      ret += num;
    }
    if (ret > Math.pow(2,31)) return 0;
      //만약 32비트 범위를 넘어서면 0을 리턴한다.
    return isNegative ? ret * -1 : ret;
      //인풋값이 음수였다면 음수로 되돌려서 반환한다.
  };