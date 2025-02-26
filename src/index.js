'use strict';

/**
 * Returns true if the given string is a palindrome, false otherwise, space including
 * @param {string} str 
 * @returns {boolean}
 */
function isPalindrome(str) {
    if (typeof str !== 'string') return false;
    let strWithoutSpace = str.toLowerCase().replaceAll(' ', '');
    return strWithoutSpace === strWithoutSpace.split('').reverse().join('');
}

console.log(isPalindrome('RaceCar')); // true
console.log(isPalindrome('Able was I ere I saw Elba')); // true
console.log(isPalindrome('A man a plan a canal Panama')); // true
console.log(isPalindrome('Hello World!')); // false
console.log(isPalindrome(150051)); // false, must be a string