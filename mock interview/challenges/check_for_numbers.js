/**
 * @description - determine whether the array contains numbers
 * @difficulty - 1/5
 * 
 * @param {Array} - array of values
 * @returns {Boolean}
 * 
 * @example - checkForNumbers(['a','b', 2, {}]) // --> true
 * @example - checkForNumbers(['a','b','c', {}]) // --> false (array contains no numbers)
 */

 const checkForNumbers = (arr) => {
    for( let i=0; i < arr.length; i++ ) {
        if (typeof arr[i] === "number") {
        return true
        }
    }
    return false
}

module.exports = checkForNumbers;