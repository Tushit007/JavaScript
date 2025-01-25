/*Higher order fnc
A fnc that does one or both--
1.takes one or multiple fnc as arguments
2.return a fnc*/
function multiplleGreet(func,n){
    for(let i=0;i<n;i++){
        func();
    }
}

let greet =function(){
    console.log("Hello!");
}

multiplleGreet(greet,1000);

function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("Wrong input")
    }
}

// Methods--Actions that can be performed on an object
const calculator={

    add:function(a,b){
        return a+b;
    },
    sub(a,b){ //anothrt way of writing methods
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
}


