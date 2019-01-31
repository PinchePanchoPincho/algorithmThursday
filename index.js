// INPUT IS A STRING, RETURNS A NUMBER

function lowestProduct(input) {
  if (input.length < 4) return 'Number is too small';
  let str = input.split('');
  const arr = str.map(e => parseInt(e));
  
  let smallestProduct = arr[0] * arr[1] * arr[2] * arr[3];
  for (i = 0; i < arr.length; i++) {
    let tempProduct = arr[i] * arr[i+1] * arr[i+2] * arr[i+3];
    if (tempProduct < smallestProduct) smallestProduct = tempProduct; 
  }
  return smallestProduct;
}

module.exports = lowestProduct;