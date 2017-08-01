function greet() {
    console.log('in greet function');
}
greet();
function logGreet(func) {
    func();    
}
logGreet(greet);