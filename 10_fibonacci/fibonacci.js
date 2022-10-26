const fibonacci = function(n) {
    if (n < 0){
        return 'OOPS';
    }
    let sum= 1;
    let prev = 0;
    let current = 1;
    for (let i = 1; i < n; i++){
        sum = prev + current;
        prev = current; 
        current=sum;




}
return sum;


};

// Do not edit below this line
module.exports = fibonacci;
