// const var1 = "hello";

// const save = ()=>{  
    
//     localStorage.setItem('data',var1);
//     localStorage.clear();
//     // let save = localstorage.getItem('data')
//     // to retrive data from localstorage
//     // localStorage.clearItem('data')
//     // localStorage.clearAll();
    
// }


let arr = [12,4,567,4]
window.localStorage.setItem('val',JSON.stringify(arr));

let answer = window.localStorage.getItem('val')
let output = JSON.parse(answer)
console.log(output[2])
