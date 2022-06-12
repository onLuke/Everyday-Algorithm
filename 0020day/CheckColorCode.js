/**
 * 칼라 코드이면서 6글자인지 아닌지 판별
 * 
 */
function solution(s) {
  if (s.length !== 6) {
    return false
  }

  const COLOR_CODE_ELEMENTS = 'ABCDEF0123456789'

  const elements = s.split('')
  for (let i = 0; i < elements.length; i++) {
    if (COLOR_CODE_ELEMENTS.indexOf(elements[i]) < 0) {
      return false
    }
  }

  return true
}
