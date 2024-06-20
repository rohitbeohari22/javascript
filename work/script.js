document.getElementById("mybtn").addEventListener("click",display);
function display(){

   let age = prompt("What is your age ");
   document.getElementById("myid").innerHTML=age;
   
if (age >=18){
    alert("you are eligible");
}
else{
    alert("you are not aligible")
}

}