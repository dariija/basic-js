import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
    let number = "" + n;
    let maxNum = 0;

    for (let i = 0; i < number.length; i++) {
        let num = [...number];
        num.splice(i, 1);
        num = +num.join("");
        
        if (num > maxNum) {
            maxNum = num
        };
    };
    return maxNum
}
