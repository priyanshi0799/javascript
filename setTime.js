function wrong(){
    for(var i = 1; i<=5; i++){
        setTimeout(() => {
            console.log(i);     //closure keeps the refrence of its lexical scope, not value
        }, i * 1000);
    }   
}
console.log("Hello before wrong function :)")
wrong();

//we can replace var with let, as let is block scoped, hence with every iteration,
//new i varaible is created.

//with closure
function right(){
    for(var i = 1; i<=5; i++){
        function close(val){
            setTimeout(() => {
                console.log(val)
            }, val * 1000);
        }
        close(i);
    }
}
right();


for(var i = 0; i<3; i++){
	setTimeout((function(){
        (function(){
            console.log(i)
        })()
    })(i), 10);
}


for(var i = 0; i<3; i++){
	setTimeout((function(j){
        console.log(j)
    })(i), 10);
}

