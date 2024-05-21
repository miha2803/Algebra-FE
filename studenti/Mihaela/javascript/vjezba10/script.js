//1. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.

var words =['quickest', 'fox', 'jumps', 'over', 'the','the','lazy', 'dog'];

function findLongestWord(arr) {
    var word = '';
    for (var i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length) {
            word = arr[i];
        }
    }
    return word;
}
//2. Vratite tu riječ iz funkcije i spremite u varijablu.

var lonestWord = findLongestWord(words);
//3. Ispišite varijablu u konzoli.
console.log(lonestWord);
