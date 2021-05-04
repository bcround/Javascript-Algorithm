/*
나누어 떨어지는 숫자 배열
출처 - https://programmers.co.kr/learn/courses/30/lessons/12910
*/

function solution(arr, divisor) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      ans = [...ans, arr[i]];
    }
  }
  return ans.length ? ans.sort((a, b) => a - b) : [-1];
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));
