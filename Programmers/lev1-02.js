/*
핸드폰 번호 가리기
출처 - https://programmers.co.kr/learn/courses/30/lessons/12948
*/

function solution(phone_number) {
  return [...phone_number].map((v, i, arr) => arr.length - 4 <= i ? v : '*').join('');
}

console.log(solution('01033334444'));
console.log(solution('027778888'));