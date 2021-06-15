//global variable
const num = 25;
const scope = () =>{
    console.log(num); //global variable   
}
scope()//global variable

// 2. Local Scope
const a = 2; 
function local(){
   const d = 21; //local variable
   console.log(d); //can access it inside the function
}
b();  // 21

console.log(d); //ReferenceError: d is not defined

// 3. Hosting
function hosting(){
    return b;
    console.log(b) //error show
    const b = 7;  
  }
  
hosting(); //undefined
