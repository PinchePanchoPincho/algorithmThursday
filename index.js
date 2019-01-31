// INPUT IS A STRING, RETURNS A NUMBER

function lowestProduct(input) {
  let products = [];
  let nums = input.split('').map(Number);
  if (input.length < 4) {
    return 'Number is too small'
  } else {
    for (let i = 0; i <= input.length - 4; i++) {
      let product = nums[i] * nums[i+1] * nums[i+2] * nums[i+3]; 
      products.push(product);
    }
  }
  return Math.min(...products);
}

module.exports = lowestProduct;
