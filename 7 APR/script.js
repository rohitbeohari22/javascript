// function changeColor(color){
//     document.body.style.backgroundColor = color;
// }


// function generateP(){
//     var pass ="";
//     var str =
//     "ABCDEFGHIJKLMNOPQRSTAADabcdefghijklmnopqrstuvwxydakd1445554544444@";

//     for(let i = 1; i<=8; i++){
//         var char = Math.floor(Math.random() * str.length + 1);
//         pass += str.charAt(char);
//     }
//     return pass;
// }

// function display(){
//     document.getElementById("demo").innerHTML = generateP();
// }

function replaceText(){
    var originalText = document.getElementById("originalText").innerHTML;
    var replacedText = originalText.replace(/google/gi, "cybrom");
    document.getElementById("originalText").innerHTML = replacedText;
}
