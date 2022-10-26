const removeFromArray = function(removeFromArray,...args) {
    // iterates through arguments 
    for ( let j = 0; j < args.length; j++){
    // iterates through removeFromArray and removes argument value from array
        for (let i = 0; i < removeFromArray.length; i++){
            if (removeFromArray[i]=== args[j]){
                removeFromArray.splice(i,1)

            }
    

        }

    }
    // returns array without the argument values
return removeFromArray;

};


// Do not edit below this line
module.exports = removeFromArray;
