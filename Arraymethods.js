//foreach for traversing arrays
let arr =[1,2,3,4,5];
let print=(el)=>{
    console.log(el);
};
arr.forEach(print);
//for each for array of objects
let ar=[{
 name:"Tushit",
 age:23,
 marks:98
},
{
    name:"Tu",
    age:23,
    marks:98

},
    {
     name:"Tut",
        age:23,
        marks:98

    }]
        ar.forEach((el)=>{
            console.log(el)
        })

//map
let gpa=ar.map((el)=>{
    return el.marks/10;
}) 

let num=[1,2,3,4,5]

let double=num.map((el)=>{
    return el*2; //so double will be a new array with [2,4,6,8,10]
})

//filter
let nums=[1,2,3,4,5,6,7,8,9]
let even =nums.filter((el)=>(el%2==0));//implicit return

//every is same as AND all the conditions haave to be true then only it will give true
//some is like OR
let ab=nums.every((el)=>
  el%1==0
);

//Reduce
let qwe=[21,2,3,4,5,6,7,6];
let a=qwe.reduce((res,el)=>(res+el));



//Max of array[]

let aRR=[1,3,8,9,0,50,11];
//first we are doing it using loop
max=-1;
for(let n of aRR){
    if(max<n){
        max=n;
    }
}
console.log(max)
//Now we use reduce
let m=aRR.reduce((m,el)=>{
    if(m<el){
       return el;
    }
    else{
        return m;
    }
})

//check if all no. of arrays are multiple pf 10 or not
let array=[10,20,30,40]
let q=array.every((el)=>
    el % 10 == 0 
);
let g=array.reduce((min,el)=>{
    if(min>el){
       return el;
    }
    else{
        return  min;
    }
})