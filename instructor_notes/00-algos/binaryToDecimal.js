//https://www.rapidtables.com/convert/number/binary-to-decimal.html


function binary2decimal(str){
    let result = 0;
    let exp =0;
    //your code here
    // Math.pow(2,exp)


    return result;

}


const bin2decRecursive = (binary, index = binary.length - 1, num = 0, exp = 0) => {
    if(index == -1) return num
    if(binary[index] == 1){
        let temp = Math.pow(2, exp)
        num += temp
    }
    return bin2decRecursive(binary, index - 1, num, exp + 1)
}

console.log(binary2decimal("11100")) //28






//1   1    0   1    0    0    1    0    0
