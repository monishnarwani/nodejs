function greet() {
    console.log('in greet function');
}
greet();
function logGreet(func) {
    func();    
}
logGreet(greet);

var greetMe = function () {
    console.log('in greetMe');
}
greetMe();

logGreet(greetMe);

logGreet(function () {
    console.log('function expression on fly');
});