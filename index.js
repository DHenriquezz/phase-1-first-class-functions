function receivesAFunction(spy){
   console.log(spy());
}
receivesAFunction(function(){
    return "hey"
});
function returnsANamedFunction(){
    return (function codingIsTricky(){
        console.log("I think i might be getting he hang of this")
    })
}
codingIsTricky;

function returnsAnAnonymousFunction(){
    return (function(){
        num1 + num2
    });
}