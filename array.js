/* var names = ["masum", "nahid", "nishat", "shuvo"];
console.log(names);
console.log(names.length);
names.push("sojib");
console.log(names.length);
names.pop();
console.log(names);
names.shift(); //shift is opposite of pop . it remove element from first place.
console.log(names);

//unshift opposite of push. it add element at first place.
names.unshift("moon");
console.log(names);
// add element in specific position using splice
names.splice(2, 0, "rahim", "karim"); // first 2 is the position where i will add the element and second position 0  tell us 
// how many element will be remove from last 
console.log(names);
// removing elements using splice
// names.splice(1,2);
// console.log(names);
var namesorted = names.sort(); // sort() function sort every element  by alphavatically
names.reverse(); // reverse() function reverse every element.
console.log(namesorted);
*/
var numbers = [20, 5, 25, 45, 1];
numbers.sort(function (a, b) {
    return b - a;
});
console.log(numbers);