function strDecode(str){
    let result = '';
    let currentChar = "";
    for (let i=0;i<str.length;i++) {            // if we see a letter, set it as our current character
                                                // so we can add it to result later
        if (isNaN(str[i])) {
            currentChar = str[i];
        }

        if (!isNaN(str[i]) && isNaN(str[i-1])) { // if we have a number and the character before it is not a number...
            for (let n=0;n<str[i];n++) {        // we know we have a single digit number
                result += str[i-1]
            }
        }
        if (!isNaN(str[i]) && !isNaN(str[i-1])) { // if we have a number and the character before it is also a number, 
                                                 // we know we have at least a double digit number
            let newStr = "";                    // create empty string to concatenate number characters
            while (!isNaN(str[i+1])) {
                newStr += str[i-1];             //we know these two
                newStr += str[i];               //are numbers already
                newStr += str[i+1];             // while the next digit is also a number, add it to our string
                i++;
            }
            let newNum = parseInt(newStr)       // cast our string as an integer so we can loop that many times
            console.log(newNum)
            for (let j=0;j<newNum;j++) {        // add the current character to our result ^^^ that many times
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
    for(let i=0;i<str.length;i++){
        if(isNaN(str[i])){
            temp = str[i]
        }else{
            if(counter == 0 && !isNaN(str[i+1])){
                counter = str[i]
            }
            if(counter == 0 && isNaN(str[i+1])){
                counter = str[i]
                while(counter != 0){
                    newString += temp
                    counter--
                }
            }
            if(counter != 0 && isNaN(str[i+1])){
                counter = counter + str[i]
                while(counter != 0){
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