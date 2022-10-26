const ftoc = function(f) {
  let c; 
  c = ((f-32)/1.8000);

  return Number (c.toFixed(1)); 

};

const ctof = function(c) {
  let f; 
  f = ((c *1.8)+ 32);
  return Number (f.toFixed(1));

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
