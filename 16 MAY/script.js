// console.log("john");
// setTimeout(myfunction,3000);
// console.log(34);
// function myfunction(){
//     document.getElementById("demo").innerHTML = " I am from bhopal";
// }

setInterval(myfunction,1000);
function myfunction(){
    let d = new Date();
    document.getElementById("demo1").innerHTML = 
    d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
}