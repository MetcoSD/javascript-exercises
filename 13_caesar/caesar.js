const caesar = function(Str, shft ) {
    // accounts for large negitve shifts to account for the 0 index 
    if (shft < -26){ shft -= 1;} 

    // splits String into Array 
    let StrArray = Str.split("");

    /* creates alpha key [A,B,C...Z,a,b,c...z] by creating an array of 52 indexes and changing the unicode values to of each index to its consectuive characters.
       if index is  */
    const alphaKey = [...Array(52)].map((e,i) => String.fromCharCode(i+1 <= 26 ? i+65: i + 71)); 

    // unpacks alphaKey array that is created 
    let alphaVal = [...alphaKey];

    // if shtt (shift) is negitive than shtt equals the remainder of shftt by 26 and add 26 else its just shift 
    let shtt = (shft< 0 ? (shft % 26)+26: shft); // if shift is less than 0 then shift = shift = 26 else = shift 
    // applys the shift to values
    for (i = 0; i< shtt; i++){

        alphaVal.push(...alphaVal.splice(26,1)); // shift lowerCase
        alphaVal.splice(25,0,alphaVal.shift());  // shift UpperCase

    }
    let cipher = []; // empty cipher 
    alphaKey.forEach((key, i) => cipher[key] = alphaVal[i]); // creates cipher and fills empty cipher dictionary 
    
    let result = []; // empty result array 
    // compares string array to cypher array and pushes letter to result array 
    StrArray.forEach((letter)=> cipher[letter] ? result.push(cipher[letter]): result.push(letter));
    return result.join(""); // joins result array 

};

// Do not edit below this line
module.exports = caesar;
