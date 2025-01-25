//Default parameters--Giving a default value to the arguments..
 function sum(a,b=9){
    return a +b ;
 }
 //Spread--Expands an iterable into multiple values

 let arr=[1,2,3,4,5,6,7,7,8,9];
console.log( Math.min(...arr));
console.log(...arr);

//Spread with array literals
//copy array
let newarr=[...arr];
console.log(newarr);

//Spread with Object literals--
const data = {
    email:"Edaf@gaml.com",
    password:"A024333",
};
const dataCopy ={
    ...data ,id:"565",
}
let obj1={...arr}
console.log(obj1);



//Rest--Allows afnc to take an indefinite no.of arguments and bundle them in an array
function sum(...args){
    for( let i=0;i<args.length;i++){
        console.log("you gave us:",args[i]);
    }
}

//Destructuring--Storing values of array into multiple variables
let names=["t","b","p","s"];
let [winner,Runnerup,...others]=names;
//Destructuring objects--
const Studeny ={
    name:"Rahul",
    age:24,
    hobby:"nerd",
    ass:0
}

let{ass,hobby}=Studeny

