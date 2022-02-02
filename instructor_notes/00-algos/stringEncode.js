function strEncode(str){
    let newString =""
    let counter =1;
    let currentChar = str[0]
    //for loop
    for (let i=1; i <str.length; i++) {
        if (currentChar === str[i]){
            counter++

        } else {
            newString += currentChar + counter
            currentChar = str[i]
            counter = 1;
        }
        if (str[i+1] === undefined) {
            newString += currentChar + counter
        }
        
    }
    return newString

}



console.log(strEncode("aaaabcccddddd")) //a4b1c3d5
console.log(strEncode("abcccddeeeee")) //a1b1c3d2e5