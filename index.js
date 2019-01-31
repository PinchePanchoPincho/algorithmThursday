// INPUT IS A STRING, RETURNS A NUMBER

function lowestProduct(input) {
  let arr = input.split('')
  if (arr.length < 4) return 'Number is too small';
  arr = arr.map(str => Number(str));
  const res = [];
  for (let i = 0; i <= arr.length -4; i++) {
    res.push(arr[i] * arr[i + 1] * arr[i + 2] * arr[i + 3]);
  }
  return Math.min(...res);
}

module.exports = lowestProduct;