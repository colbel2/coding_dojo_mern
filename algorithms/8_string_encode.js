function strEncode(str) {
    let result = "";
    let counter = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            counter += 1;
        }
        else {
            result += str[i]
            result += counter;
            counter = 1;
        }
    }
    return result;
}

console.log(strEncode("aaaaabbbbbbcccccddddd"))
console.log(strEncode("aaaaaaaabbbbcdeeee"))
console.log(strEncode("abtzudoguskdfjsfjsfgskjjdjdjdjsjksbcds"))


const stringEncode = (str) => {
    let stringObj = {}
    let returnString = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] in stringObj) {
            stringObj[str[i]] += 1
        }
        else {
            stringObj[str[i]] = 1
            if (str[i - 1] in stringObj) {
                returnString += str[i - 1]
                returnString += stringObj[str[i - 1]]
            }
        }
    }
    return returnString
}
console.log(stringEncode("aaabbbcddddeefff"))




function strEncode(str) {
    let string = '';
    let i = 0;
    while (i < str.length) {
        let count = 1;
        let j = i + 1;
        while (str[i] === str[j]) {
            j++
            count++
        }
        if (/^[a-zA-Z]+$/.test(str[i])) {
            string += str[i] + count;
        }
        i = j;
    }
    return string;
}
console.log(strEncode("aaaaaaaaabcccccddddd       "))



function strEncode(str) {
    let strObj = {}
    let result = ""

    if (str.length == 0) {
        return null;
    }
    for (let i = 0; i < str.length; i++) {
        strObj[str[i]] ? strObj[str[i]] = strObj[str[i]] + 1 : strObj[str[i]] = 1;
    }

    for (let item in strObj) {
        if (item != " ") {
            result += item;
            result += strObj[item];
        }
    }

    return result;
}



function strEncode(str) {
    let newString = ""
    let counter = 1;
    let currentChar = str[0]
    //for loop
    for (let i = 1; i < str.length; i++) {
        if (currentChar === str[i]) {
            counter++

        } else {
            newString += currentChar + counter
            currentChar = str[i]
            counter = 1;
        }
        if (str[i + 1] === undefined) {
            newString += currentChar + counter
        }

    }
    return newString

}



console.log(strEncode("aaaabcccddddd")) //a4b1c3d5
console.log(strEncode("abcccddeeeee")) //a1b1c3d2e5




function strEncode(str) {
    let count = 1;
    let output = "";

    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            // if it's the first letter / first position
            output = str[i]; // add it to the output = a
        } else if (str[i] === str[i - 1]) {
            count++;
        } else if (str[i] !== str[i - 1]) {
            ab;
            output += count; //a1
            count = 1; // reset count
            output += str[i]; // output a1b
        }
    }
    output += count; // output
    return output;
}



const strEncode = (str) => {
    // let count = 1;
    // let shiny = "";
    // for (let i = 0; i < str.length; i++) {
    //     if(str[i] === str[i +1]) {
    //         count ++;
    //     }
    //     if(str[i] != str[i + 1]){
    //         shiny += str[i] + count;
    //         count = 1;
    //     }
    // }
    // return shiny;


    let shiny = {};
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            if (shiny[str[i]] == undefined) {
                shiny[str[i]] = 1;
            } else {
                shiny[str[i]] = shiny[str[1]] + 1;

            }
        }
    }
    for (let i in shiny) {
        result += i + shiny[i];
    }
    return result;
}