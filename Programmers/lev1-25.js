/*
문자열 내 p와 y의 개수
출처 - https://programmers.co.kr/learn/courses/30/lessons/12916
*/

function solution(s) {
  return (
    (s.match(/p/gi) ? s.match(/p/gi).length : 0) === (s.match(/y/gi) ? s.match(/y/gi).length : 0)
  );
}

console.log(solution('pPoooyY'));
console.log(solution('Pyy'));
console.log(solution('P'));
