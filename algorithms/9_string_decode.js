function strDecode(str) {
    let result = '';
    let currentChar = "";
    for (let i = 0; i < str.length; i++) {            // if we see a letter, set it as our current character
        // so we can add it to result later
        if (isNaN(str[i])) {
            currentChar = str[i];
        }

        if (!isNaN(str[i]) && isNaN(str[i - 1])) { // if we have a number and the character before it is not a number...
            for (let n = 0; n < str[i]; n++) {        // we know we have a single digit number
                result += str[i - 1]
            }
        }
        if (!isNaN(str[i]) && !isNaN(str[i - 1])) { // if we have a number and the character before it is also a number, 
            // we know we have at least a double digit number
            let newStr = "";                    // create empty string to concatenate number characters
            while (!isNaN(str[i + 1])) {
                newStr += str[i - 1];             //we know these two
                newStr += str[i];               //are numbers already
                newStr += str[i + 1];             // while the next digit is also a number, add it to our string
                i++;
            }
            let newNum = parseInt(newStr)       // cast our string as an integer so we can loop that many times
            console.log(newNum)
            for (let j = 0; j < newNum; j++) {        // add the current character to our result ^^^ that many times
                result += currentChar;
            }

        }
    }

    return result;
}


console.log(strDecode("a2b4c12d1")) //"aabbbbccccccccccccd"
console.log(strDecode("a2b4c8d100")) //"aabbbbccccccccddddddddddddddddddddddddddddddddddddd
//dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"




const stringDecode = str => {
    let newString = ""
    let temp = ""
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            temp = str[i]
        } else {
            if (counter == 0 && !isNaN(str[i + 1])) {
                counter = str[i]
            }
            if (counter == 0 && isNaN(str[i + 1])) {
                counter = str[i]
                while (counter != 0) {
                    newString += temp
                    counter--
                }
            }
            if (counter != 0 && isNaN(str[i + 1])) {
                counter = counter + str[i]
                while (counter != 0) {
                    newString += temp
                    counter--
                }
            }
        }
    }
    return newString
}
let codeString = "a3b14c12d1"
console.log(stringDecode(codeString))

function strDecode(str) {
    let result = '';
    let tempCharacter = 0;
    let limit = str.length / 2
    for (let j = 0; j < limit; j++) {
        for (let i = 0; i < str[tempCharacter + 1]; i++) {
            result += str[tempCharacter];
        }
        tempCharacter += 2;
    }
    return result;
}

const strDecode = (str) => {
    let letr = "";
    let num;
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            // if we're in here, we know it's not a number
            letr = str[i];
        } else {
            let j = 0;
            while (j < str[i]) {
                result += letr;
                j++;
            }
        }
    }
    console.log(result);
    return result;
};


function strDecode(str) {
    let result = '';
    let currentNum = ''
    let currentChar = ''
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            currentChar = str[i]
        }
        else {
            let temp = i;
            while (!isNaN(str[i])) {
                currentNum += str[i];
                // console.log('current number is ' + currentNum)
                i++
            }
            i = temp;
            result += currentChar.repeat(currentNum)
            currentNum = ''
        }
    }
    return result;
}


console.log(strDecode("a2b4c12d1")) //"aabbbbccccccccccccd"  



function strDecode2(str) {
    let letters = [];
    let numbers = [];
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            letters.push(str[i])
        }
        else {
            let n = 1;
            let push = '';
            push += str[i]
            while (!isNaN(str[i + n])) {
                push += str[i + n]
                n++
            }
            numbers.push(push);
        }
    }
    for (let j = 0; j < letters.length; j++) {
        result += letters[j].repeat(numbers[j])
    }
    return result;
}