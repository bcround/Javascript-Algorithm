/*
이상한 문자 만들기
출처 - https://programmers.co.kr/learn/courses/30/lessons/12930
*/

function solution(s) {
  let ans = '';
  s = s.toLowerCase();
  s = s.split(' ');

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      if (!(j % 2)) ans += s[i][j].toUpperCase();
      else ans += s[i][j];
    }
    if (i !== s.length - 1) ans += ' ';
  }
  return ans;
}

console.log(solution('try hello world')); // TrY HeLlO WoRlD
