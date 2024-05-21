/*
function getFullName(fName, lName) {
    return function (){
        return fName + " " + lName;
    }
}

var func = getFullName("John", "Doe");
var fullName = func();
console.log(fullName); */

// 1.
var x = "John Doe"; 
function vratiNesto(name) {
   var x = name;
   function f() { 
    return x; 
}
   return f;
}
var y = vratiNesto("Jane Doe");
var z = vratiNesto(x)();

console.log(z);
conaole.log(y);

// 2.
var x = "Jane Doe";

var myF = (function(name) {
    console.log(name);
    var x = name;
    function f() {
        return x;
    }
    return f;
})(x);

console.log(myF());