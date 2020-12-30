//normal function statement
function sayHi(){
    console.log("Hi");
}
sayHi();

//function inside another function

function callFunction(fun){
    fun();
}

//function expression

var sayBye = function(){
    console.log("Bye");
};

sayBye();
callFunction(sayBye);