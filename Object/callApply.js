const person = {
    firstName: 'Abidur', 
    LastName: 'Rahman',
    salery: 15200,
    fullName: function(){
        this.firstName + thsi.LastName;
    },
    bill: function(money, tax){
        console.log(this);
        this.salery = this.salery - money - tax;
        return this.salery
    }
}

const person2 = {
    firstName: 'Niloy', 
    lastName: 'Mahmud',
    salery: 2000
}
// person.bill()

// const person2Bill = person.bill.bind(person2)
// person2Bill(200)

// person.bill.call(person2, 200)

person.bill.apply(person2, [500, 50])
console.log(person2);

// console.log(person2Bill.salery);


// person.bill(200)
// console.log(person.salery);