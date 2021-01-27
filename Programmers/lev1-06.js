function solution(s, n) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ') {
          answer += ' ';
      } else if (s.charCodeAt(i) + n > 122) {
          answer += String.fromCharCode(97 + s.charCodeAt(i) + n - 123);
      } else if (s.charCodeAt(i) + n > 90 && s.charCodeAt(i) + n < 116 && s.charCodeAt(i) < 97) {
          answer += String.fromCharCode(65 + s.charCodeAt(i) + n - 91);
      }
      else {
          answer += String.fromCharCode(s.charCodeAt(i) + n);
      }
  }
  
  return answer;
}

console.log(solution('Bb', 25));  // Aa
console.log(solution('AB', 1));  // BC
console.log(solution('z', 1));  // a
console.log(solution('a B z', 4));  // e F d