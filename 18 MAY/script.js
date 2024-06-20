setTimeout(function (){
    myFunction("i like p");
},3000);

function myFunction(value){
    document.getElementById("demo").innerHTML= value;
}



// const myPromise = new Promise (function(myResole, myReject){
//     setTimeout(function(){myResolve("i like p ");},3000);
// });

// myPromise.then(function (value){
//     document.getElementById("demo").innerHTML = value;
// });