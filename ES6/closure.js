function clock() {
    let count = 0;
    return function(){
        count++
        return count;
    }
}
const output = clock()
console.log(output());
console.log(output());
console.log(output());