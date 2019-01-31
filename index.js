// INPUT IS A STRING, RETURNS A NUMBER

function lowestProduct(input) {

  let products = [];

  if (input.length < 4) {
    return 'Number is too small'
  } else {
    for (let i = 0; i <= input.length - 4; i++) {
      let product = Number(input[i]) * 
        Number(input[i+1]) * 
        Number(input[i+2]) * 
        Number(input[i+3]);
      products.push(product);
    }
  }
  
  return Math.min(...products);

}

module.exports = lowestProduct;