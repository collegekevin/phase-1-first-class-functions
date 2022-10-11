function receivesAFunction(callBack) {
    console.log("I'm receiving a function");
    callBack();
    return console.log("function return");
}

function callBack(word){
    console.log(word);
}

receivesAFunction(callBack);

function returnsANamedFunction(){
    return namedFunction;

}

function namedFunction(num){
    return num * 2;
}

function returnsAnAnonymousFunction(something){
        return function () { return "I'm anonymous!" };
        ;
      }