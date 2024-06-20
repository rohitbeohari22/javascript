document.getElementById("demo").innerHTML="hello world";
document.write("<h2>This is a new heading </h2><p>lorem ipsum data</P>");

let fname = "john";
let Iname = "doe";


document.getElementById("demo").innerHTML = 
"hello" + " " + fname + " " + Iname + " " + " welcome to js class";

document.getElementById(
    "demo"
).innerHTML = `hello ${fname}  ${Iname} welcome to js class`;
document.write("<h2>this is a new heading</h2><p>lorem ipsum data</p>");


function display(){
    let obj = document.getElementById("demo2");
    obj.style.backgroundColor = "pink";
    obj.style.border = "3x solid red";
    obj.innerHTML = `

    <table>
    <tr>
    <th>Name</th>
    <th>Course</th>
    <th>City</th>
    </tr>
    <tr>
    <td>John doe</td>
    <td>javascript</td>
    <td>Bhopal</td>
    </tr>
    <tr>
    <td>brad smith</td>
    <td>react</td>
    <td>indore</td>
    </tr>
    </table>
    `
}

function display(){
    let obj = document.getElementById("demo3");
    obj.style.backgroundColor = "pink";
    obj.style.border = " 3px solid red";
    obj.style.fontFamily = "bold";
    obj.style.color = "blue";
    obj.style.borderRadius = "20px"
    obj.innerHTML = `

    <table>
      lorm to make to this this make to save that to maney distance to make to has     </table>
    `
}