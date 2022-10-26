const sumAll = function(n1, n2) {
    let sum = 0;
    // checks to see if parameters are not numbers or a srtigs 
    if (isNaN(n1) || isNaN(n2) || n1 < 0 || (typeof n1 ==='string'|| typeof n2 === 'string')){
        sum = "ERROR"
    }
    // establishes the range between the two parameters including the parameters 
    let numRange = Math.abs(n2 -n1)+1;
    // if parameter is not a string and the FIRST parameter is less then the SECOND parameter execute
    if (!(typeof n1 === 'string') && !(typeof n2 === 'string')&& n1> 0 && n2 > 0 && n1 < n2){
        // iterates through the range starting and the small number summing each iteration witht he one before.
        for ( i = n1; i <= numRange; i++){
            sum+=i;
        }
    }
    // if the parameter is not a string and the SECOND parameter is less then the FIRST paramter execute
    if (!(typeof n1 === 'string') && !(typeof n2 === 'string')&& n1 > 0 && n2 > 0 && n2 < n1){
        // iterates through the range starting and the small number summing each iteration witht he one before. 
        for ( i = n2; i <= numRange; i++){
            sum+=i;
        }
        
    }
    // returns total value of the sum of all iterations accrosss the givn range.  
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
