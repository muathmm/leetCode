/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) return "Zero";

    const belowTwenty = [
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
        "Seventeen", "Eighteen", "Nineteen"
    ];
    
    const tens = [
        "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];
    
    const thousands = ["", "Thousand", "Million", "Billion"];
    
    const helper = (num) => {
        if (num === 0) return "";
        else if (num < 20) return belowTwenty[num] + " ";
        else if (num < 100) return tens[Math.floor(num / 10)] + " " + helper(num % 10);
        else return belowTwenty[Math.floor(num / 100)] + " Hundred " + helper(num % 100);
    }
    
    let result = "";
    for (let i = 0; num > 0; i++) {
        let chunk = num % 1000;
        if (chunk !== 0) {
            result = helper(chunk) + thousands[i] + " " + result;
        }
        num = Math.floor(num / 1000);
    }
    
    return result.trim();
};