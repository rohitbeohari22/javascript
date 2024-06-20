const myinterval = setInterval(display,500);

function display(){
    document.getElementById("demo").innerHTML +=0;
}

function stop(){
    clearInterval(myinterval);
}



// const myinterval = setInterval(display,100);

// function display(){
//     document.getElementById("demo").innerHTML += "cybrom,";
// }

// function stop(){
//     setInterval(myinterval);
// }



// const mytimer = setInterval(timer,1000);
// function timer(){
//     const date = new Date();
//     document.getElementById("demo").innerHTML = date.toLocaleTimeString();
// }

// function stop(){
//     clearInterval(mytimer)
// }