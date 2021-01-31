/*
문자열 내 마음대로 정렬하기
출처 - https://programmers.co.kr/learn/courses/30/lessons/12915
*/

function solution(strings, n) {
  for (let i = 0; i < strings.length - 1; i++) {
      for (let j = 0; j < strings.length - 1 - i; j++) {
          if (strings[j][n] > strings[j + 1][n]) {
              [strings[j], strings[j + 1]] = [strings[j + 1], strings[j]];
          } else if (strings[j][n] === strings[j + 1][n]) {
              if (strings[j] > strings[j + 1]) {
                  [strings[j], strings[j + 1]] = [strings[j + 1], strings[j]];
              }
          }
      }
  }
  
  return strings;
}

console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abce', 'abcd', 'cdx'], 2));