/*
하샤드 수
출처 - https://programmers.co.kr/learn/courses/30/lessons/12947
*/

function solution(x) {
  let res = x + '';
  
  res = res.split('');
  const sum = res.reduce((acc, v) => acc + +v, 0)
  
  return x % sum ? false : true;
}

console.log(solution(10));  // true
console.log(solution(12));  // true
console.log(solution(11));  // false
console.log(solution(13));  // false