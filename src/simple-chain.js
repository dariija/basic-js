import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
    chain: [],

    getLength() {
        return this.chain.length
    },

    addLink(value) {
        if (typeof value === undefined) {this.chain.push(" ")}
        else {{this.chain.push(`${value}`)}};
        return this
    },

    removeLink(position) {
      if( !(Number.isInteger(position)) || !(typeof position === "number") || !this.chain[position - 1] ) {
        this.chain = [];
          throw new Error("You can't remove incorrect link!")
          
      } else {
          this.chain.splice(position - 1, 1);
          return this
      };
    },

    reverseChain() {
        this.chain.reverse();
        return this
    },

    finishChain() {
        let res = this.chain.map( elem => `( ${elem} )`).join("~~");
        this.chain = [];
        return res
    }
};
