function delayedGreeting(name,delay){
    setTimeout(function(){
        console.log("hello, " + name);
    },delay);
}

// exaple usage:
delayedGreeting('Alice',2000);