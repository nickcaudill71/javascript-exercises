const fibonacci = function(value) {
    let num = Number(value);
    if (isNaN(num) || num < 0) return 'OOPS';
    
    let ans = 0;

    if (num == 0) return 0;
    if (num == 1 || num == 2) {
        ans += 1;
    }
    else {
        ans += fibonacci(num -1) + fibonacci(num - 2);
    }
    
    return ans;
};

// Do not edit below this line
module.exports = fibonacci;
