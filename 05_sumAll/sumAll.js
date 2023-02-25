const sumAll = function(arg1, arg2) {
    if (typeof arg1 != 'number' || typeof arg2 != 'number' || arg1 < 0 || arg2 < 0) {
        return 'ERROR'
    } else {
        let result = 0
        let start = Math.min(arg1, arg2)
        let stop = Math.max(arg1, arg2)
        for ( i = start ; i <= stop ; i++) {
            result += Number(i);
        }
        return result
    }
};


// Do not edit below this line
module.exports = sumAll;
