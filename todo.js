let todo=[];

let req=prompt("enter your request");

while(true){
    if(req=="list"){
        console.log("-------------------------");
        for(let i =0;i<todo.length;i++){
            console.log(i,todo[i]);
            continue;
        }
        console.log("-------------------------");
    }  
    else if(req=="quit") {
        console.log("Quitting app ");
        break;}
   
    else if(req=="add"){
        let t= prompt("enter your task");
        todo.push(t);
        console.log("task added");
        

    }  
    else if(req=="delete"){
        let idx= prompt("enter task index");
        todo.splice(idx,1);
        console.log("task deleted");

    }
    req=prompt("enter your request");

}