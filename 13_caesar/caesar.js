 const caesar = function(string,factor) {
    //Divide the string into Array
    let arrayString = string.split('')
    let arrayStringCharCode = []

    //Calculate the real factor by removing the full loops
    factor = factor - (26 * ((factor/26)>>0))

    //Create an array of unicode values for all the letters
    for (i = 0 ; i < arrayString.length ; i++){
        arrayStringCharCode.push(arrayString[i].charCodeAt())
    }

    //Loop through all the letters within CharCode Array
    for (i = 0 ; i < arrayStringCharCode.length ; i++) {
        if(arrayStringCharCode[i] >= 65 && arrayStringCharCode[i] <= 91){
            if(arrayStringCharCode[i] + factor >90){
                arrayStringCharCode[i] = arrayStringCharCode[i] + factor - 26
            } else if (arrayStringCharCode[i] + factor <65){
                arrayStringCharCode[i] = arrayStringCharCode[i] + factor + 26
            } else {
                arrayStringCharCode[i] = arrayStringCharCode[i] + factor
            }
        } else if (arrayStringCharCode[i] >= 97 && arrayStringCharCode[i] <= 122){
            if(arrayStringCharCode[i] + factor >122){
                arrayStringCharCode[i] = arrayStringCharCode[i] + factor - 26
            } else if (arrayStringCharCode[i] + factor <97) {
                arrayStringCharCode[i] = arrayStringCharCode[i] + factor + 26
            } else {
                arrayStringCharCode[i] = arrayStringCharCode[i] + factor
            }

        }
//        arrayStringCharCode[i] = arrayStringCharCode[i] + factor
    }

    for (i = 0 ; i < arrayStringCharCode.length ; i++) {
        arrayStringCharCode[i] = String.fromCharCode(arrayStringCharCode[i])
    }
    return arrayStringCharCode.join('')
};

// // Do not edit below this line
module.exports = caesar;


// let string = 'Hello, World!'
// const factor = -29;
// console.log('test')

// function caesar(string,factor) { 
//     //Divide the string into Array
//     let arrayString = string.split('')
//     let arrayStringCharCode = []

//     //Calculate the real factor by removing the full loops
//     factor = factor - (26 * ((factor/26)>>0))

//     //Create an array of unicode values for all the letters
//     for (i = 0 ; i < arrayString.length ; i++){
//         arrayStringCharCode.push(arrayString[i].charCodeAt())
//     }

//     //Loop through all the letters within CharCode Array
//     for (i = 0 ; i < arrayStringCharCode.length ; i++) {
//         if(arrayStringCharCode[i] >= 65 && arrayStringCharCode[i] <= 91){
//             if(arrayStringCharCode[i] + factor >90){
//                 arrayStringCharCode[i] = arrayStringCharCode[i] + factor - 26
//             } else if (arrayStringCharCode[i] + factor <65){
//                 arrayStringCharCode[i] = arrayStringCharCode[i] + factor + 26
//             } else {
//                 arrayStringCharCode[i] = arrayStringCharCode[i] + factor
//             }
//         } else if (arrayStringCharCode[i] >= 97 && arrayStringCharCode[i] <= 122){
//             if(arrayStringCharCode[i] + factor >122){
//                 arrayStringCharCode[i] = arrayStringCharCode[i] + factor - 26
//             } else if (arrayStringCharCode[i] + factor <97) {
//                 arrayStringCharCode[i] = arrayStringCharCode[i] + factor + 26
//             } else {
//                 arrayStringCharCode[i] = arrayStringCharCode[i] + factor
//             }

//         }
// //        arrayStringCharCode[i] = arrayStringCharCode[i] + factor
//     }

//     for (i = 0 ; i < arrayStringCharCode.length ; i++) {
//         arrayStringCharCode[i] = String.fromCharCode(arrayStringCharCode[i])
//     }
//     return arrayStringCharCode.join('')
// }
// console.log(caesar(string,factor))