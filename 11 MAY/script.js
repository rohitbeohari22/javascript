// Q. write a Javascript function to capitalize the first letter of a string.
// sample input: cybrom techonoloy bhopal
// Ans: Cybrom Techonology bhopal

// function capitalizeFirstLetter(str){
//     return str.split('').map(word=> word.charAt(0).toUpperCase() + word.slice(1)).join('')
// }

// // eXample usage:

// console.log(capitalizeFirstLetter("we are cybrom javascript students"));


// Write a javascript function to check whether a string is blank or not. 

function isBlank(str){
    return !str.time();
}

// Example usage:

console.log(isBlank("")); // output:true
console.log(isBlank(" "));// output:true
console.log(isBlank("Hellow"));// output:false
console.log(isBlank(" Hellow"));// output:false