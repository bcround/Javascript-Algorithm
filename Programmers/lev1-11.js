/*
비밀지도
출처 - https://programmers.co.kr/learn/courses/30/lessons/17681
*/

function solution(n, arr1, arr2) {
  let arr = [];
  let res = [];

  for (let i = 0; i < n; i++) {
    let num = (Number(arr1[i].toString(2)) + Number(arr2[i].toString(2))).toString();

    if (num.length < n) {
      num = '0'.repeat(n - num.length) + num;
    }

    arr = [...arr, num];
  }

  for (let i = 0; i < n; i++) {
    let ans = '';
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === '0') {
        ans += ' ';
      } else {
        ans += '#';
      }
    }
    res = [...res, ans];
  }

  return res;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));