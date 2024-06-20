function display(){
    alert("hello your code is running");
}

let x = document.getElementById("mybtn")
x.addEventListener("click",function (){
    alert("this is an addEventListener event");
});

x.addEventListener("mousemove", myfunction);

function myfunction(){
    document.getElementById("demo").innerHTML = Math.random();
    // console.log("hello friends");
}

function remove(){
    x.removeEventListener("mousemove",myfunction);
}

document.getElementById("rohitraj").addEventListener("change",result);
function result(){
    let y = document.getElementById("myinput").value;
    document.getElementById("demo").innerHTML = y;
}

