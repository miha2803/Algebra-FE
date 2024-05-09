var text = ' Lorem ipsum dolor sit amet';
var dulljina_stringa = text.length;
console.log(duljina_stringa);

var rijec_sit = text.substr(19,3);
console.log(rijec_sit);;

var novi_tekst = text.replace("amet","elit");
console.log(novi_tekst);

var dodatni_tekst = text + ", consectetur  adipiscing elit";
console.log(dodatni_tekst);

var veliki_tekst = text.toUpperCase();
console.log(veliki_tekst);


var bezPraznine = text.trim();
console.log(bezPraznine);

var slovo = text.charAt(12);
console.log(slovo);
