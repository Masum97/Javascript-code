//IIFEs means Immediately invoked function expressions

(function display(num1, num2) {
    console.log(num1 + num2);
})(5, 2);

//function expression

var display = function sub(num1, num2) {
    console.log(num1 - num2);
};
display(5,3);