const sumAll = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' ||
        a < 0 || b < 0) {
        return 'ERROR'
    }
    let result = 0;
    if(a>b){
        [a,b] = [b,a];
    }

    for (let i = a; i <= b; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
