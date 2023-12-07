// const display=(a,b)=>{
//     result=a*b;
//     return result;
// }
// let x=display(3,4);
// console.log(`The result is ${x}`);

// let a=5;
// let y=5;

// try {
// console.log(`the value is ${a}`);

// console.log(g);

// console.log(`The value is ${y}`);


// } catch(error){

//     console.log(error)

// } finally {
//     console.log(`Here is the finally block`);
// }

const x= parseInt(prompt("Enter a number between 5 and 10"));

try {
    if(x<5){
        throw "The number is too low"
    }
    else if(x>10){
        throw "The number is too high"
    } else {
        console.log(`The number is ${x}`);
    }

}catch(error){
  console.log(error);
}