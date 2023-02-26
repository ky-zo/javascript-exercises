const fibonacci = function(value) {
    let a = 0
    let x = Number(value)
    if (x < 0){
        return "OOPS"
    } else if (x === 0) {
        return 0
    } else if (x === 1) {
        return 1
    } else {
        let b = 1
        let c = 0
        for (i = 1; i < x ; i++){
            a = b + c
            c = b
            b = a
            //[0,1,2,3,4,5]
            // 1,1,2,3,5,8
        }
    }
    return a

};


// Do not edit below this line
module.exports = fibonacci;
