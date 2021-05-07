/*
음양 더하기
출처 - https://programmers.co.kr/learn/courses/30/lessons/76501
 */

function solution(absolutes, signs) {
  return signs.reduce((acc, cur, i) => (cur ? acc + absolutes[i] : acc - absolutes[i]), 0);
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0
