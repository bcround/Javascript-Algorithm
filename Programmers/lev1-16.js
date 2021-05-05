/*
자연수 뒤집어 배열로 만들기
츌처 - https://programmers.co.kr/learn/courses/30/lessons/12932
*/

function solution(n) {
  let ans = [];
  while (n > 0) {
    ans = [...ans, n % 10];
    n = parseInt(n / 10);
  }
  return ans;
}

console.log(solution(12345));
