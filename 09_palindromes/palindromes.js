const palindromes = function (str) {// "Hello, My Friend"
    let strToLower = str.toLowerCase();
    // "hello, my friend"
    let strNoPunctuation = strToLower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    // "hello my friend"
    let finalStr = strNoPunctuation.replace(/\s/g,"");
    // "hellomyfriend"
    let strArray = finalStr.split('');
    // ["h","e","l".ect]
    let reverseArray = strArray.reverse();
    // ["d","n","e",ect]
    let reverseString = reverseArray.join();
    let finalReverseString = reverseString.replaceAll(',', '');
    // "dneirfymolleh"
    if (finalReverseString == finalStr)
    //dneirfymolleh == "hellomyfriend" 
        return true;
    else{
        return false;
    }


};

// Do not edit below this line
module.exports = palindromes;
