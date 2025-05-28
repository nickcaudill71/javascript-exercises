const sumAll = function(a, b) {
    if ((!Number.isInteger(a) || !Number.isInteger(b)) || (a < 0 || b < 0)) return 'ERROR';

    let total = 0;
    let [start, end] = a < b ? [a, b] : [b, a];

    for (let i = start; i <= end; i++) {
        total += i;
    }

    return total
};

// Do not edit below this line
module.exports = sumAll;
