const repeatString = function (str, num) {
    if (num === 0) 
        return '';
    if (num < 0) 
        return 'ERROR'
    
    result = str;
    for (i = 1; i < num; i++) {
        result = result.concat(str);
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
