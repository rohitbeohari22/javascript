const mypara = "Apple, Grapes, Watermelon";
console.log(mypara.charAt(16));
console.log(mypara.charCodeAt(0));

// converts string to array
let x = mypara.split(" , ");
// To get the index of any character
x = mypara.indexOf("Grapes");
console.log(x);


// includes
x = mypara.includes("watermelon");
console.log(x);

// search

x = mypara.search("mel");
console.log(x);

// match
x = mypara.match(/Apple/gi);
console.log(x);

