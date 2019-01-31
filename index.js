// INPUT IS A STRING, RETURNS A NUMBER

function lowestProduct(input) {
  let arr = input.split('')
  if (arr.length < 4) return 'Number is too small';

  let res = Infinity;
  arr = arr.map(str => Number(str));
  for (let i = 0; i + 3 < arr.length; i++) {
    const cur = arr[i] * arr[i + 1] * arr[i + 2] * arr[i + 3];
    res = res < cur ? res : cur;
  }
  return res;
}

module.exports = lowestProduct;