// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

function factorial(int) {
//         if (int == 1) {
//             return 1;
//         }
//         return int * factorial(int - 1);
//     }
//     console.log(factorial(5));


// module.exports = factorial;


let n = 1;
for(let i = 1; i <= int; i++){
    n*=i;
}
return n;
}
console.log(factorial(5));
module.exports = factorial;
