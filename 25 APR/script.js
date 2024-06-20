const mypara = " This is a string of names like rahul,rahul,rohit,pragya,yashi and rahul is a good friend of jajal";
// length
console.log(mypara.length);

// sclic

let x = mypara.slice(7,30);
x = mypara.slice(7);
x = mypara.slice(-12,-1);
console.log(x);

//substring,substr,replace,replaceAll,/g/i

x = mypara.substring(7,30);
x = mypara.substring(7);
// x = mypara.substring(-12 -1);
console.log(x);

x = mypara.replace("rahul","mohit");
console.log(x);
x = mypara.replaceAll("rahul","mohit");
console.log(x);
x = mypara.replaceAll(/rahul/gi,"mohit");
console.log(x);

const myname = "john doe";
console.log(myname.toUpperCase());

const subject = "JAVASCRIPT";
console.log(subject.toLowerCase());

//CONTACT CHARAT CHARCODEAT

// const newstring = mypara + " " + subject;
// const newstring = `${myname} ${subject}`;

const newstring = myname.concat( " " , subject);

console.log(newstring);
















