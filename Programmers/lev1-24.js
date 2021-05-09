/*
내적
출처 - https://programmers.co.kr/learn/courses/30/lessons/70128
*/
function solution(a, b) {
  return a.reduce((acc, val, i) => acc + val * b[i], 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
console.log(solution([-1, 0, 1], [1, 0, -1]));
