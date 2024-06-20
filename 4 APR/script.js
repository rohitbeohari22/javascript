// const validate = () => {
//     let myname = document.form1.name.value;
//     let myemail = document.form1.email.value;
//     let myadd  = document.form1.Add.value;
//     let mypass = document.form1.pass.value;


//  if(myname==""){
//     alert("enter your name");
//     document.form1.name.focus();
//     return false;
//  }

//  if(myemail==""){
//     alert("enter your email");
//     document.form1.email.focus();
//     return false;
//  }

//  if(myadd==""){

//     alert("enter your add");
//     document.form1.add.focus();
//     return false;
//  }


//  if(mypass.length < 6){
//     alert("password should be more than 6 characters");
//     document.form1.pass.focus();
//     return false;
//  }

//  };


 const validate = () => {
 let myname = document.form2.name.value;
 let mypass = document.form2.pass.value;

 if(myname==""){
    alert("enter your name");
    document.form2.name.focus();
    return false;
 }


 if(mypass.length < 8){
    alert("password should be more than 6 characters");
    document.form2.pass.focus();
    return false;
 }

};