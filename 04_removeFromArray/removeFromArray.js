const removeFromArray = function (arr, ...elems) {
    let result = arr.filter((elem) => elems.includes(elem) === false)
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
