const reverseString = function(word) {
    const arr = word.split("");
    const reverse = arr.reverse();
    return reverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
