// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },3000)
//     })
// }
// async function demo(){
//   await getNum();
//   await getNum();
//   await getNum();
   
// }
let h1 =document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve, reject) => {
       setTimeout(function(){
           h1.style.color=color;
           console.log(`color changed to ${color}`)
           resolve("color changed");
       },delay)
   })
};
async function demo(){
     await changeColor("red",2000);
    await changeColor("blue",2000);
    await changeColor("green",2000);
}

