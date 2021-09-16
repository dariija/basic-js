import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
    let encode = [];
    let counter = 1;

    for (let i = 0; i < str.length; i++) {

        if (str[i + 1] === str[i]) {counter++}
        else {
            if (counter > 1) {
                encode.push(counter);
                encode.push(str[i]);
            } else {
                encode.push(str[i]);
            };
            counter = 1
        }
    };
    return encode.join("");
}
