const removeFromArray = function(argList, ...trash) {
    return argList.filter(x => !(trash.includes(x)))
}


// Do not edit below this line
module.exports = removeFromArray;
