// //Arrow fnc
// const sum=(a,b)=>{
//     console.log(a+b);
// };
// //Arrow fnc implicit return
// const mul=(a,b)=>(
//     a*b //here return is done implicitly and instead of {}we use ()
// );

// //setTimeout--inbuilt high order fnc of window object 
// // console.log("hi ther");
// setTimeout(()=>{
//     console.log("Apna college");
// // },4000);
// console.log("Welcome");
// // //setInterval--It is same as setTimeout but with a slight difference that it continuis just like a loop
// let id=setInterval(()=>{
//     console.log("hiiii");
// },2000);
// // clearInterval(id);

//this with arrow fnc--
//Normal fnc--scope->this->calling object
//arrow fnc--Lexical Scope->this->parent scope
const student={
    name:"Aman",
    marks:95,
    prop:this,//global scope--window
    getName:function(){
        console.log(this);
        return this.name;//this this is not in global scope it is pointing toeards object
    },
    getMarks:()=>{
        console.log(this);
        return this.name;//but this this is in parents scope and for this arrow fnc its parent is Student object that is in global scope(Window obj)
    },
    getInfo1:function(){
        setTimeout(()=>{
            console.log(this);//student
        },2000);
    } ,
    getInfo2:function(){
        setTimeout(function(){
            console.log(this);//window
        },2000);
    }
};















//
// //Questions
// // const avgarr=(arr)=>{
// //     let total =0;
// //     for(let num of arr){
// //         total+=num;

// //     }
// //     return total/arr.length;

// // };
// // let arr=[1,2,3,4,5,6];
// // console.log(avgarr(arr));
// const object={
//     message:'Hello,World!',
//     logMessage(){
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,3000);

// letlength=4;
// function callback(){
//     console.log(this.length);
// }
// const oBject={
//     length:5,
//     method(callback){
//         callback();
//     },
// };
//     oBject.method(callback,1,2);