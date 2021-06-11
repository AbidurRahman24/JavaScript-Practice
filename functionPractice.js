function eveniFy(num) {
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (element % 2 ==0 ) {
            console.log('This is even number', element);
        }
        else{
            console.log('this is odd number:', element);
        }
    }
}



const num = [12,15,19,47,85,23,45, 8, 6]
// eveniFy(num)

const age = [12,15, 8, 6]
eveniFy(age)