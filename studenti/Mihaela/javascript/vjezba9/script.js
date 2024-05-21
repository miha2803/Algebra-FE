var names = ['John', 'Jane', 'Bob','', 'Mike'];

console.log(names);

//1. Pomoću petlje napravite 
//iteraciju kroz niz i ispisite u konzolu sve elemente niza.

for (var i = 0; i < names.length; i++){
    console.log(names[i]);
}

//2
for (var element of names){
    console.log(element);
    if (element === 'Jane') break;
}

//3
for (var i = 0; i < names.length; i++){
    if (!names[i]) {
       names.splice(i, 1);

}
console.log(names[i]);

names.forEach(function (element) {
    console.log(element);
});