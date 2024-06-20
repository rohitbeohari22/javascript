function change(){
    document.getElementById("demo").value = "indore";
   
}

function display(){
    let name = prompt("what is your name?");
    document.getElementById("myid").innerHTML = name;
}

// document.getElementById("mybtn").addEventListener("click",show);

function show () {
     let name = "john doe";
     // let fname = prompt ("ENTER YOUR NAME :");
     console.log(name);
     document.getElementById("myid").innerHTML = name;
     alert(name);
     // console.log(fname);
}

let age = 10;
if (age >= 18){
    alert ("you are eligible");
}

else{
    alert ("you are not eligible");
}