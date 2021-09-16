import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

export default function transform(arr) {

    if(!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!")
    };

    let basicArr = arr;
    let newArr = [];

    for (let i = 0; i < basicArr.length; i++) {
      
        switch(basicArr[i]) {
            case '--discard-next':
                if ( !(basicArr[i + 1] === undefined)) {
                    basicArr.splice( i + 1, 1)
                };
                break;

            case '--discard-prev': 
                if ( !(basicArr[i - 1] === undefined)) {
                  if( !(typeof basicArr[i - 1] === "string")) {
                      newArr.pop()
                  };
                };
                break;

            case '--double-next':
                if ( !(basicArr[i + 1] === undefined)) {
                    newArr.push(basicArr[i + 1])
                };
                break;    

            case '--double-prev': 
                if ( !(basicArr[i - 1] === undefined)) {
                    if( !(typeof basicArr[i - 1] === "string")) {
                        newArr.push(basicArr[i - 1])
                    };
                };
                break;

            default:
                newArr.push(basicArr[i]);
        };
    };
    return newArr;
};
