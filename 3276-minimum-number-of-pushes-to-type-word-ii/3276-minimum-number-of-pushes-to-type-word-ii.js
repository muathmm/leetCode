/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
     let arr = new Array(26).fill(0)
    for(let char of word){
        arr[char.charCodeAt(0)-97]++
    }
    arr.sort((a,b)=>b-a)
    let res=0
    for(let i=0;i<arr.length;i++){
        res+= arr[i]*(Math.floor(i/8)+1)
    }
    return res
};