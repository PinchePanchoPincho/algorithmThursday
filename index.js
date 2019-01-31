// INPUT IS A STRING, RETURNS A NUMBER

function lowestProduct(input) {
  if (input.length < 4) return 'Number is too small';
  let arr = input.split('');
  let minMult = parseInt(arr[0]) * parseInt(arr[1]) * parseInt(arr[2]) * parseInt(arr[3]);
  for (let i = 1; i < arr.length - 4; i++) {
    if (parseInt(arr[i]) * parseInt(arr[i+1]) * parseInt(arr[i+2]) * parseInt(arr[i+3]) < minMult) {
      minMult = parseInt(arr[i]) * parseInt(arr[i+1]) * parseInt(arr[i+2]) * parseInt(arr[i+3]);
    }
  }
  console.log(minMult);
  return minMult;
}

module.exports = lowestProduct;