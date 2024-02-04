var number = Number(prompt("enter a number"));
/* var x = typeof (number);
document.write(x, " <br/> ");
if (number > 0) {
    console.log("positive");
}
else {
    console.log("Negative");
}
*/
//var result= number>0 ? "positive": "Negative"; //if the condition is true than first part will work
// otherwise second part will execute
console.log(result);
// if we have more than two condition than we have to follow the below syntax

var result=  number>0 ? "positive" : number<0 ? "negative" : "zero";
console.log (result);