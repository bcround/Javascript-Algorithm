/*
제일 작은 수 제거하기
출처 - https://programmers.co.kr/learn/courses/30/lessons/12935
*/

function solution(arr) {
  let min = arr[0];

  if (arr.length === 1) return [-1];

  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }

  arr.splice(arr.indexOf(min), 1);

  return arr;
}

console.log(solution([4, 3, 2, 1])); //[4, 3, 2]
console.log(solution([10])); // [-1]
