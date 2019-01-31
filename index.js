// INPUT IS A STRING, RETURNS A NUMBER

function lowestProduct(input) {
  if (input.length < 4) return "Number is too small";
  const arr = [];
  for (let i = 0; i < input.length - 3; i++) {
    arr.push(input.slice(i, i + 4).split('').map(Number).reduce((a, b) => a * b, 1));
  }
  return Math.min(...arr);
}

module.exports = lowestProduct;