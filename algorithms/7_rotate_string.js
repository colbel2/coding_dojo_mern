function rotateString(str, distance) {
    let newString = '';
    distance = distance % str.length;
    for (let i = 0; i < str.length; i++) {
        newString += str[(str.length - distance + i) % str.length];
    }
    return newString;
}

console.log(rotateString('abcde', 2))

function isRotation(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }
    for (let i = 0; i < str1.length; i++) {
        let test = rotateString(str1, i);
        if (test === str2) {
            return true;
        }
    }
    return false;
}

console.log(isRotation('Hello WOrld!', 'ld!Hello WOr'));




// function areRotations(str1, str2) {

//     return (str1.length == str2.length) &&
//         ((str1 + str1).indexOf(str2) != -1);
// }



// var str1 = "AACD";
// var str2 = "ACDA";

// if (areRotations(str1, str2))
//     console.log("Strings are rotations of each other");
// else
//     console.log("Strings are not rotations of each other");

// console.log(areRotations("abcde", "deabc")) //true
// console.log(areRotations("abcde", "edacb")) //false

// EXAMPLE
// abcd,efg rotate by 3
// 0123,456


// 012,3456 //index of result
// efg,abcd
// 456,0123 //the matching indexes in the original string

// function rotateString(str, n) {
//     n = n % str.length; //offset
//     let newStr = "";

//     for (let i = 0; i < str.length; i++) {
//       newStr += str[(str.length - n + i) % str.length];
//     // }               str[7       - 3 + 0 ] > str[4 % 7] > e
//     // }               str[7       - 3 + 1 ] > str[5 % 7] > f
//     // }               str[7       - 3 + 2 ] > str[6 % 7] > g
//     // }               str[7       - 3 + 3 ] > str[7 % 7] > str[0] > a
//     // }               str[7       - 3 + 4 ] > str[8 % 7] > str[1] > b
//     // }               str[7       - 3 + 5 ] > str[9 % 7] > str[2] > c
//     // }               str[7       - 3 + 6 ] > str[10 % 7] > str[3] > d
//     return newStr;
//   }


// let str = "abcdefg"; //string length 7
// let n = 18; //offset

// console.log(n % str.length);

// find out str lenght, get remainder compared to offset
function rotateString(str, n) {
    n = n % str.length; //offset

    let newStr = str.substring(str.length - n, str.length) //use substring to grab the end of the original string characters (up until offset #)
    // console.log(newStr)


    for (let i = 0; i < str.length - n; i++) { //grab the beginning of the original string, up until the offset where we started
        newStr += str[i];
    }

    return newStr;


}

console.log(rotateString("abcdefgh", 4))


function isRotation(str1, str2) {

    if (str1.length != str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        let rotatedStr = rotateString(str1, i)
        // console.log(rotatedStr)
        if (rotatedStr === str2) {
            return true;
        }
    }
    return false;
}

console.log(isRotation("abcde", "deabc")) //true
console.log(isRotation("abcde", "edacb")) //false


// let rotateString = function(str, num){
//     let start = 0
//     let end = str.length
//     let endString = str.slice(end-num, end)
//     let startString = str.slice(start, end-num)
//     let returnString = endString + startString
//     return returnString
// }
// console.log(rotateString("abcde", 2)) // "deabc"

// let isRotation = function(str1, str2){
//     for(let i = 1;i<=str1.length;i++){
//         let checkString = rotateString(str1, i)
//         if(checkString == str2) return true;
//     }
//     return false
// }
// console.log(isRotation("abcde", "deabc"))

function isRotation(s1, s2) {
    if (s1.length !== s2.length || s1 === s2) {
        return false;
    }
    return (s1 + s1).includes(s2);
}
