let rotateString = function(str, num){
    let start = 0
    let end = str.length
    let endString = str.slice(end-num, end)
    let startString = str.slice(start, end-num)
    let returnString = endString + startString
    return returnString
}
console.log(rotateString("abcde", 2)) // "deabc"

let isRotation = function(str1, str2){
    for(let i = 1;i<=str1.length;i++){
        let checkString = rotateString(str1, i)
        if(checkString == str2) return true;
    }
    return false
}
console.log(isRotation("abcde", "deabc"))



function isRotationEfficient(s1, s2) {
    if (s1.length !== s2.length || s1 === s2) {
      return false;
    }
    return (s1 + s1).includes(s2);
  }

