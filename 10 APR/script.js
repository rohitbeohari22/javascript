// let marks = prompt("enter marks");

// if(marks>90){
//     console.log("EXECELLENT");
// }

// else if(marks>60&&marks<90){
//     console.log("6000");
// }

// else {
//     console.log("WORK HARDER");
// }


// switch statement
// date is javascript keyword

// let day;
// const date = new Date();
// console.log(date.getMonth());
// switch(new Date().getDay()){
//     case 0:
//         day = "sunday";
//         break;

//         case 1:
//         day = "monday";
//         break;

//         case 2:
//             day = "tuesday";
//             break;

//             case 3:
//                 day = "wednesday";
//                 break;
  
//                 case 4:
//                     day = "thursday";
//                     break;

//                     case 5:
//                     day = "friday";
//                     break;

//                     case 6:
//                     day = "saturday";
//                     break;

//                     default:
//                     day = "not valid";
//                     break;
        

// }

// console.log(day);
// Document.getElementById("demo").innerHTML = day;


// let i;
// let text = " ";
// for(i=0; i<=10; i++){
//     console.log(i);
//     //text += i+ "<br>";
//     document.getElementById("demo").innerHTML +=i+"<br>";
// }



const person ={
    fname: "john",
    lname : "doe",
    age:"24",
    city:"bhopal",

};

let text = " ";
for(let x in person){
    // text += person[x]+"<br>";
    document.getElementById("demo").innerHTML +=person[x]+"<br>";
}

