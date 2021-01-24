/*
콜라츠 추측
출처 - https://programmers.co.kr/learn/courses/30/lessons/12943
*/

function solution(num) {
  let count = 0;

  while(num !== 1) {
    num = num % 2 ? num * 3 + 1 : num / 2
    count++;
    if (count > 500) return -1;
  }

  return count;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));