// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let sum = 0;
    let count = 0;
for (let i = 0; i < numbers.length; i++) {
        if(typeof numbers[i] === 'number'){
    sum += numbers[i];
        count++; 
        }  
}
return sum / count;
}
console.log(average([4, 5, 3, 7, 8, 9]));

module.exports = average;

