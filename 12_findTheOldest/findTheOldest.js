// const findTheOldest = function(list) {
//     let oldest = list.reduce((prev, curr) => {
//         if((curr.yearOfDeath - curr.yearOfBirth) > (prev.yearOfDeath - prev.yearOfBirth)){
//             return curr
//         } else {
//             return prev
//         }
//     })
//     return oldest

// }

const findTheOldest = function(list) {
    let oldest = list.reduce((acc, curr) => {
        let currentYear = new Date().getFullYear()
        let accAge
        if (typeof acc.yearOfDeath !== 'undefined'){
            accAge = acc.yearOfDeath - acc.yearOfBirth
        } else {
            accAge = currentYear - acc.yearOfBirth
        }
        let currAge = 0
        if(typeof curr.yearOfDeath !== 'undefined'){
            currAge = curr.yearOfDeath - curr.yearOfBirth
        } else {
            currAge = currentYear - curr.yearOfBirth
        }
        if((currAge) > (accAge)){
            return curr
        } else {
            return acc
        }
    })
    return oldest
}

//Do not edit below this line
module.exports = findTheOldest;

// const list = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

//   let oldest = list.reduce((acc, curr) => {
//     let accAge
//     if (acc.yearOfDeath !== 'undefined'){
//         accAge = acc.yearOfDeath - acc.yearOfBirth
//     } else {
//         accAge = acc.yearOfDeath - Date().getFullYear()
//     }
//     let currAge
//     if(curr.yearOfDeath !== 'undefined'){
//         currAge = curr.yearOfDeath - curr.yearOfBirth
//     } else {
//         currAge = curr.yearOfDeath - Date().getFullYear()
//     }
//     if((currAge) > (accAge)){
//         return curr
//     } else {
//         return acc
//     }
// })

// console.log(`${oldest.name}`)