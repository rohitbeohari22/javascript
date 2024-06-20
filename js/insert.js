document.getElementById("btn1").addEventListener("click" ,myInsert);

function myInsert(){
    let myEmpno = document.getElementById("eno").value;
    let myName = document.getElementById("nm").value;
    let myCity = document.getElementById("city").value;
    let mySalary = document.getElementById("salary").value;

    let url = "http://localhost:3000/employees";

    fetch(url, {
        //adding method type
        method:"POST",

        // Adding body or conents to send
        body: JSON.stringify({
            employeeno: myEmpno,
            name:myName,
            city:myCity,
            salary:mySalary,
        }),
        // Adding headers to yhe request

        headers:{
            "Content-type": "application/json; charset=UTF-8",
        }
    })

    // converting to JSON
    .then((data)=>{
        console.log(data);
        return data.json();
    })

    // displaying results to console
    .then((json)=>{
        console.log(json);
        alert("data saved successfullly");
    });
    

}