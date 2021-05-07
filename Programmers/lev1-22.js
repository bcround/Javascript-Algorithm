/*
폰켓몬
출처 - https://programmers.co.kr/learn/courses/30/lessons/1845
*/

function solution(nums) {
  let answer = 0;
  nums.sort((a, b) => a - b);
  answer = nums.filter((num, i) => num !== nums[i + 1]).length;
  if (answer > nums.length / 2) return nums.length / 2;
  else return answer;
}

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
