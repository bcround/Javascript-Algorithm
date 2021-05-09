/*
K번째수
출처 - https://programmers.co.kr/learn/courses/30/lessons/42748
*/

function solution(array, commands) {
  return commands.map(command => {
    const [start, end, pos] = command;
    return array.slice(start - 1, end).sort((a, b) => a - b)[pos - 1];
  });
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3]
    ]
  )
);
