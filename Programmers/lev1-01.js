/*
행렬의 덧셈
출처 - https://programmers.co.kr/learn/courses/30/lessons/12950
*/

function solution(arr1, arr2) {
  var answer = [];
  
  for (let i = 0; i < arr1.length; i++) {
      answer.push([]);
      for (let j = 0; j < arr1[i].length; j++) {
          answer[i].push(arr1[i][j] + arr2[i][j]);
      }
  }

  return answer;
}

console.log(solution([[1,2], [2,3]], [[3,4],[5,6]]))  // [[4, 6], [7, 9]]
console.log(solution([[1], [2]], [[3],[4]]))  // [[4], [6]]
