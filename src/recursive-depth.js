import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {

    constructor() {}

    calculateDepth(arr) {
        let depthCounter = 0;
        let counter = 0;

        for (let elem of arr) {
            if (Array.isArray(elem)) {
                counter += this.calculateDepth(elem);
                if (counter > depthCounter) {depthCounter = counter}; 
                counter = 0;
            } 
        };

        return depthCounter + 1;
    };
}
