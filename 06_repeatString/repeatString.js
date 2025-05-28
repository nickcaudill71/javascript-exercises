const repeatString = function(word, iter) {
    if (iter < 0) return "ERROR";

    let repeated = "";
    for (let i = 0; i < iter; i++) {
        repeated += word;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
