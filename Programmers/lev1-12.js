/*
같은 숫자는 싫어
출처 - https://programmers.co.kr/learn/courses/30/lessons/12906
*/

function solution(arr) {
  let answer = [];
  answer = arr.filter((el, i, arr) => el !== arr[i + 1]);
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
