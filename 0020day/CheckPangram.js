/**
 *  모든 알파벳이 포함된 문자열인지 판별
 * 
 */
function solution(s) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

  for (let i = 0; i < ALPHABET.length; i++) {
    const c = ALPHABET.charAt(i)
    if (s.indexOf(c) < 0) {
      return false
    }
  }

  return true
}

