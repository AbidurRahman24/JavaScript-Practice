// function add(num1, num2) {
//     var total = num1 + num2
//     return total;
// }
// var result = add(10,15)
// console.log(result);


function lergestNum(numbers) {
    var larger = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > larger ) {
            larger = element
            
        }
    }
    return larger;
}
const output = lergestNum([12,15,80])
console.log(output);