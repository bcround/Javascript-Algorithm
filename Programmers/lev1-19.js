/*
약수의 합
출처 - https://programmers.co.kr/learn/courses/30/lessons/12928
*/

function solution(n) {
  let ans = 0;

  for (let i = 1; i <= n; i++) {
    ans += n % i ? 0 : i;
  }

  return ans;
}

console.log(solution(12));
console.log(solution(5));
