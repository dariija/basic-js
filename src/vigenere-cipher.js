import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {

  constructor(value) {
    if (!value) {
        this.reverse = false;
    } else {
        this.reverse = true;
    };
  }

  encrypt(message, key) {
    if (!message || !key) {
        throw new Error(`Incorrect arguments!`)
    };

    let alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    let res = [];

    message = message.toUpperCase();
    key = key.repeat( Math.ceil(message.length / key.length)).slice(0, message.length).toUpperCase();

    for (let i = 0; i < message.length; i++ ) {
        if (!/[A-Z]/.test(message[i])) {
            key = key.slice(0, i) + `${message[i]}` + key.slice(i);
        }
    };
    key = key.slice(0, message.length);

    for(let i = 0; i < message.length; i++) {

        if ( !/[A-Z]/.test(message[i])) {
            res.push(message[i]);
        } else {
            let m = alphabet.indexOf(message[i]);
            let k = alphabet.indexOf(key[i]);
            let c = (m + k) % alphabet.length;
            res.push(alphabet[c]);
        }

    };
    return (this.reverse)? res.reverse().join("") : res.join("");
  }

  decrypt(message, key) {
    if (!message || !key) {
        throw new Error(`Incorrect arguments!`)
    };

    message = message.toUpperCase();
    key = key.repeat( Math.ceil(message.length / key.length)).slice(0, message.length).toUpperCase();

    for (let i = 0; i < message.length; i++ ) {
        if (!/[A-Z]/.test(message[i])) {
            key = key.slice(0, i) + `${message[i]}` + key.slice(i);
        }
    };

    let alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    let res = [];

    for(let i = 0; i < message.length; i++) {

        if ( !/[A-Z]/.test(message[i])) {
            res.push(message[i]);
        } else {
            let c = alphabet.indexOf(message[i]);
            let k = alphabet.indexOf(key[i]);
            let m = (c + alphabet.length - k) % alphabet.length;
            res.push(alphabet[m]);
        }
    };
    return (this.reverse)? res.reverse().join("") : res.join("");
  };
}
