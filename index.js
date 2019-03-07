function collatz (n) {
  const chain = [];
  while (n !== 1) {
    chain.push(n);
    n = (n % 2 === 0) ? (n / 2) : (3 * n + 1);
  }
  chain.push(n);
  return chain;
}

function longestBetween (i) {
  let longest = null;
  let longestLength = 0;
  for (let n = 1; n < i; n++) {
    const currentLength = collatz(n).length;
    if (longestLength < currentLength) {
      longest = n;
      longestLength = currentLength;
    }
  }
  return longest;
}

console.log(longestBetween(1, 10 ** 8));

module.exports = { collatz, longestBetween };