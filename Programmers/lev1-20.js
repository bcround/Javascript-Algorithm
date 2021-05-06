/*
가운데 글자 가져오기
출처 - https://programmers.co.kr/learn/courses/30/lessons/12903
*/

function solution(s) {
  let ans = '';

  ans =
    s.length % 2
      ? s[Math.floor(s.length / 2)]
      : s[Math.floor(s.length / 2 - 1)] + s[Math.floor(s.length / 2)];
  return ans;
}

console.log(solution('abcde')); // 'c'
console.log(solution('qwer')); // 'we'
