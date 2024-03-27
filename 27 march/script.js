function display(){
    alert("this is a event");
}

// let mybtn = document.getElementById("btn");
// mybtn.addEventListener("click", () => {
//     alert("this is also another event");
// });

document.getElementById("btn").addEventListener("click",display1);

// function display1(){
//     alert("this is also an event");
// }

let mydate = new Date();
function display1(){
    document.getElementById("demo").innerHTML = mydate;
}