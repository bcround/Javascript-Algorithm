function solution(n, m) {
  [n, m] = n > m ? [m, n] : [n, m];

  let n1 = [];
  let n2 = [];
  let ans = [];

  const getGCD = (num1, num2) => {
    for (let i = 1; i <= num1; i++) {
      if (Number.isInteger(num1 / i)) {
        n1.push(i);
      }
    }

    for (let i = 1; i <= num2; i++) {
      if (Number.isInteger(num2 / i)) {
        n2.push(i);
      }
    }

    for (let i = 0; i < n2.length; i++) {
      for (let j = 0; j < n1.length; j++) {
        if (n1[j] === n2[i]) ans.push(n1[j]);
      }
    }

    return Math.max(...ans);
  }

  return [getGCD(n, m), n * m / getGCD(n, m)];
}

console.log(solution(3, 12));
console.log(solution(2, 5));