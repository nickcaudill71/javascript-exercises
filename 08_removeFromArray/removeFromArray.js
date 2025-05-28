const removeFromArray = function(arr, ...valuesToRemove) {
    return arr.filter(elem => !valuesToRemove.includes(elem))
};

// Do not edit below this line
module.exports = removeFromArray;
