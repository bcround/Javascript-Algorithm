/*
정수 내림차순으로 배치하기
출처 - https://programmers.co.kr/learn/courses/30/lessons/12933
*/

function solution(n) {
  n = n + '';
  n = n.split('');
  n.sort((a, b) => b - a);
  return +n.join('');
}

console.log(solution(118372)); // 873211
