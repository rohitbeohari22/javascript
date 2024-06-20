// function validate(){
//     let x = document.getElementById("myinput").value;
//     let text;
//     if(isNaN(x)  || x < 1 || x >10 ){
//         text = "input not valid";
//     }
//     else{
//         text = "input valid";
//     }
//     document.getElementById("demo").innerHTML = text;
// }


   const mytimer = setTimeout(display,3000);
   function display(){
    document.getElementById('demo').innerHTML = "All the best for html ppt";
   }

  function stop(){
    clearTimeout(mytimer);
  }

  let name = "john dow";
  console.log(name);