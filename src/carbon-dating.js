import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {

  if (sampleActivity && typeof sampleActivity === "string" && Number(sampleActivity) && sampleActivity < 15 && sampleActivity > 0) {
    sampleActivity = Number(sampleActivity);
    const MODERN_ACTIVITY = 15;
    const HALF_LIFE_PERIOD = 0.693/5730;

    let res = (Math.log(MODERN_ACTIVITY) - Math.log(sampleActivity))/HALF_LIFE_PERIOD;
    return res < 0 ? false : Math.ceil(res)
    
  } else return false
}
