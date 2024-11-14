
/** 
 * @param {string} str
 * @returns {string}
 */
export function toUrl(str){
    return str.replace(" ", "%20").replace("#", "%23");
}