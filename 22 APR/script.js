// const array1 = [];
// array1[0] = "john";
// array1[1] = "Doe";
// array1[2] = 34;
// console.log(array1);

// const fruits = ["Banana", "Apple", "Chikoo", "Kiwi","Mango"];

// let flen = fruits.length;
// console.log(flen);
// let text = "<ul>";
// for(let i = 0; i<flen; i++){
//     text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";
// document.getElementById("demo").innerHTML = text;


// let x  = fruits.push("watermelon");
// console.log(x);
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// fruits.unshift("Papaya");
// console.log(fruits);

// fruits.sort();
// console.log(fruits);


// console.log(Array.isArray(fruits));
// console.log(typeof fruits);
// let x = fruits.toString();
// document.getElementById("demo").innerHTML = x;
// console.log(typeof x);


// console.log(Array.isArray(fruits));
// console.log(typeof fruits);
// document.getElementById("demo").innerHTML = fruits.join("*");

// const fruits = ["Banana", "Apple", "Chikoo", "Kiwi","Mango"];
// let x = fruits.splice(2,2,"Grape","Apricot");
// console.log(x);
// console.log(fruits);

// const fruits = ["Banana", "Apple", "Chikoo", "Kiwi","Mango"];
// let x = fruits.slice(3);
// console.log(x);
// console.log(fruits);

// const fruits = ["Banana", "Apple", "Chikoo", "Kiwi","Mango"];
// const veggies = [ " okra", 'carrot' , "Cabbage", "chilly"];
// const newarray = fruits.concat(vaggies);
// console.log(newarray);


//  const array1 = [13,45,100,23,50,244];

// // array1.sort(function (a,b) {
// // return a -b;
// //});


// array1.sort(function (a,b) {
// return b -a;
//});

// console.log(array1);
// array1.reverse();
// console.log(array1);


// const array1 = [13,45,100,23,50,244];
// const array2 = [10,20,30,40,50,60];

// const newArray = [...array1,...array2];
// console.log(newArray);

// const person1 = {
//     name: "john",
//     age: "Doe",
//     city: "Bhopal",
// };

// const person2 = {
//     lastname: "emma",
//     author: "steve",
//     city: "Indore",
// };

// const newPerson = {...person1,...person2};
// console.log(newPerson);

// const arr1 = [1,2,3];
// const arr2 = [...arr1,4,5,6,7];
// const arr2 = [4,5,6,7,....arry1];
// console.log(arr2);


const arr1 = [1,2,3];
const arr2 = [...arr1];

arr1.push(5);
console.log(arr1);
console.log(arr2);








