import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
    if (!date) return "Unable to determine the time of year!";
    if ( !(date instanceof Date)) throw new Error("Invalid date!");

    if ( Object.prototype.toString.call(date) === "[object Date]") {
      let testDate = new Date();
      if(!(Object.keys(testDate).length === Object.keys(date).length)) throw new Error("Invalid date!");

      let month = date.getMonth(date);
      if ( month < 2 || month === 11) return "winter"
      else if ( month < 5) return "spring"
      else if ( month < 8) return "summer"
      else if ( month < 11) return "autumn"
    } 
}
