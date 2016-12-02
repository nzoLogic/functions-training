function combineWords(word1, word2) {
    return word1 + word2;
}

function repeatPhrase(phrase, n){
    for(var i = n; i > 0; i--){
        console.log(phrase);
    }
}

function toTheNthPower(number, power) {
    var n = 1;
    for(var i = power; i > 0; i--){
        n *= number;
    }
    return n;
}

function areaOfACircle(radius) {
    return 3.14 * (radius * radius);
}

function pythagoreanTheorem(a, b) {
    return Math.sqrt((a * a) + (b * b));
}

function isXEvenlyDivisibleByY(x, y) {
    return x % y === 0;
}

function countVowels(word) {
    var num = 0,
        vowels = ['a','e', 'i', 'o', 'u'];
    for(var i = 0; i < word.length; i++){
        if(vowels.indexOf(word[i].toLowerCase()) !== -1){
            num ++;
        }
    }
    return num;
}

function findWdi(arr){
     return arr.indexOf('wdi') !== -1;
}

function printTriangle(length) {
    var star = '';
    for(var i = 1; i <= length; i++){
        star += '*';
        console.log(star);
    }
}
function printPyramid(length) {
    var star = '';
    for(var i = 1; i <= length; i++){
        star += '* ';
        var space = '';
        for(var j = length; j > i; j--){
            space += ' ';
        }
        console.log(space + star);
    }

}
