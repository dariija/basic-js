import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    let result = [];
    let add = [];

    if ( !str) {
        str += "";
    };
    
    if (!options.addition && options.hasOwnProperty("addition") ) {
        options.addition += ""
    };
    
    if (options.repeatTimes) {
        for(let i = 0; i < options.repeatTimes; i++) {
            result.push(str);
        };
    } else result.push(str);

    if (options.additionRepeatTimes) {
        for(let i = 0; i < options.additionRepeatTimes; i++) {
            add.push(options.addition);
        };  
    } else add.push(options.addition);

    add = add.join( options.hasOwnProperty("additionSeparator")? `${options.additionSeparator}`: "|");

    return result.map( elem => elem + add).join( options.hasOwnProperty("separator")? `${options.separator}` : "+");
}
