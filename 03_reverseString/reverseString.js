const reverseString = function(str) {
/*     var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray; */

    // spit method (splits str into an array of strings)
    // reverse method( reverse string element 0 beomes last ect.)
    // join method ( joins array to a string)
    return str.split("").reverse().join("");

    
}


// Do not edit below this line
module.exports = reverseString;
