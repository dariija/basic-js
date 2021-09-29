import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
    let domainsObj = {};

    domains.forEach( function (domain) {
        domain = domain.split(".").reverse();

        domain.reduce( function(prevDomain, currentDomain) {
            currentDomain = prevDomain + "." + currentDomain;
            domainsObj.hasOwnProperty(currentDomain)? domainsObj[currentDomain] += 1 : domainsObj[currentDomain] = 1 ;
            return currentDomain
        }, "");
    });
    return domainsObj
}
