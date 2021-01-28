/*
x 만큼 간격이 있는 n개의 숫자
출처 - https://programmers.co.kr/learn/courses/30/lessons/12954
*/

function solution(x, n) {
  return Array.from({ length: n }, (_, i) => (i + 1) * x);
}

console.log(solution(2, 5));  // [ 2, 4, 6, 8, 10 ]
console.log(solution(4, 3));  // [ 4, 8, 12 ]
console.log(solution(-4, 2)); // [ -4, -8 ]