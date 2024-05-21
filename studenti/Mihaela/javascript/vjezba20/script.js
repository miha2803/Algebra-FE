//call()
 var obj ={
    num: 2
 };

 function add(a) {
    return this.num + a;
 }

 var b = add(3);
 console.log(b);

 var c = add.call(obj, 3);
 console.log(c);

 //apply()

 function add2(a, b) {
    return this.num + a + b;
 }

 var d = add2.apply(3, 4);
 console.log(d);

 //bind()

 function add3(a) {
    return this.num + a ;
 }

 var e = add3.bind(obj, 3);
 console.log(e());