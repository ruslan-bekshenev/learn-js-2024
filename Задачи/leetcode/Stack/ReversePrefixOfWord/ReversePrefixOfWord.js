/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let str = ''
    let str_2 = ''
    let position = word.indexOf(ch);
    for (let i = word.length - 1;  i >= 0; i--) {
        if (i <= position) {
            str += word[i]
        } else {
            str_2 += word[i]
        }
    }

    return str + str_2.split('').reverse().join('')
};

var reversePrefix = function(word, ch) {
    let index=word.indexOf(ch)
    let reversedPrefix = word.slice(0, index + 1).split('').reverse().join('');
    return reversedPrefix + word.slice(index+1);
};