function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function named (){
        console.log(Navlyn);
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log(Nameless)
    }
}