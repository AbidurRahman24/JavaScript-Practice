const callback = (names, age, work) =>{
    console.log(names);
    console.log(age);
    work() // function under paremeter call. this method i remember.
}
function todoSomething(){
    console.log('I wanna learn callback function');
}
function practice(){
    console.log('practice js every day');
}
callback('Abidur',20, todoSomething)
callback('Niloy',22, practice)