/**callback hell--callback nesting**..

let h1=document.querySelector("h1");

function changeColor(color,delay,nexrColor){
    setTimeout(function(){
        h1.style.color=color;
        if(nexrColor)
        nexrColor();
    },delay)
// 
}
 
changeColor("red",1000,()=>{
    changeColor("green",1000,()=>{
        changeColor("orange",1000,()=>{
            changeColor("crimson",1000)
        })
    })
})
let h1=document.querySelector("h1");

function changeColor(color,delay){
     return new Promise((resolve, reject) => {
        setTimeout(function(){
            h1.style.color=color;
            resolve("color changed");
        },delay)
    })
   
// 
}
 changeColor("red",1000)
 .then(()=>{
        console.log("changed");
        return changeColor("purple",1000)
 })
 .then(()=>{
        console.log("2222")
 })
 .catch(()=>{
    console.log("promisre not fulfiildfwfs");
 })




//the saviour of call back hell-
//Promises--The Promise object represents the eventual completion(or failure) of an asynchronous operation and its resulting value.
//Promise includes resolve(success)&reject(failure) as parameters

// function savetoDb(data){
//     return new Promise((res,rej)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             res("saved");
//         }
//         else{
//             rej("!saved");
//         }

//     });
// }


// //Promise's methods--then()&catch()
// let request =savetoDb("Tushit"); //req--promise object

// savetoDb("Tushit")
//   .then(()=>{
//     console.log("resolved");
//    })
//    .catch(()=>{
//     console.log("not resolved");
//    })

// then chaining---
// savetoDb("Tushit")
//   .then(()=>{
//     console.log("resolved1");
//     savetoDb("heelooo")
//     .then(()=>{
//         console.log("rrrrr");
//     })
//    })
//    .catch(()=>{
//     console.log(`not`);
//    })

//    //improved chaining using return =====
//    savetoDb("Tushit")
//   .then((result)=>{
//     console.log("resolved1");
//     console.log(result);
//       return savetoDb("heelooo")
//     })
//     .then((result)=>{
//         console.log("rrrrr");
//         console.log(result);
//     })
//    .catch((error)=>{
//     console.log(`not`);
//     console.log(error);
//    })