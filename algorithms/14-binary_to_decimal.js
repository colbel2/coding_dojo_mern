//https://www.rapidtables.com/convert/number/binary-to-decimal.html


function binary2decimal(str) {
    let result = 0;
    let exp = 0;
    //your code here
    // Math.pow(2,exp)


    return result;

}


console.log(binary2decimal("11100")) //28






//1   1    0   1    0    0    1    0    0


function binary2decimal(str) {
    let finalResult = 0;
    let exponent = 0;
    let index = str.length - 1;
    let result;
    //your code here
    while (exponent < str.length) {
        Math.floor(str[index])
        if (str[index] == 0) {
            exponent++;
            index--;
        } else {
            result = str[index] * Math.pow(2, exponent);
            finalResult += result;
            exponent++;
            index--;
        }
    };

    return finalResult;

}


console.log(binary2decimal("100011")) //35


function binary2decimal(num) {
    let result = 0;
    let reversedNum = num.split('').reverse().join('');

    for (let i = 0; i < reversedNum.length; i++) {
        if (reversedNum[i] == 1) {
            result += 2 ** i;
        }
    }

    return result;
}


function binary2decimal(str) {
    let result = 0;
    let exp = str.length - 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "1") {
            result += 2 ** exp
            exp--;
        }
    }


    return result;

}


console.log(binary2decimal("11100")) //28


const bin2dec = binary => {
    let index = binary.length - 1
    let num = 0
    let exp = 0

    while (index >= 0) {
        if (binary[index] == 1) {
            let temp = Math.pow(2, exp)
            num += temp
        }
        index--
        exp++
    }
    return num
}



const bin2decRecursive = (binary, index = binary.length - 1, num = 0, exp = 0) => {
    if (index == -1) return num
    if (binary[index] == 1) {
        let temp = Math.pow(2, exp)
        num += temp
    }
    return bin2decRecursive(binary, index - 1, num, exp + 1)
}
console.log(bin2decRecursive("11100")) // 28
console.log(bin2decRecursive("1010101")) // 85
console.log(bin2dec("11100")) // 28
console.log(bin2dec("1010101")) // 85


const binaryToDec = (str) => {
    let newStr = str.split('');
    newStr.reverse();
    let result = 0;
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === '1') {
            result = result + 2 ** i
        }
    }
    console.log(result);
    return result
}

binaryToDec('111'); // output 7


function binaryToDecimal(str) {
    let newstr = str.split('').reverse()
    let result = 0;
    for (let i = 0; i < newstr.length; i++) {
        result += (Math.pow(2, i) * newstr[i])
    }
    return result;
}