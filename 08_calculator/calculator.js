const add = function(n1, n2) {
  return Number(n1 + n2);
  
};

const subtract = function(n1, n2) {
  return Number(n1 - n2); 
	
};

const sum = function(arr) {
  let sum = 0;
  
  for (const value of arr){
    sum += value
  }

  return Number(sum); 	
};

const multiply = function(n1) {
  let product = 1; 
  for (const value of n1){
    product= product * value; 
  }
  return Number(product);

};

const power = function(n1,n2) {
  return Number(n1 ** n2); 
	
};

const factorial = function(num) {
  if (num < 0)
    return -1; 
  else if (num == 0)
    return 1; 
  else {
    return (num * factorial(num-1));
  }
}


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
