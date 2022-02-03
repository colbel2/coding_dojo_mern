//https://www.rapidtables.com/convert/number/hex-to-decimal.html

const hex2dec= (str)=>{

}



console.log(hex2dec("2DC")) //732


function hexToDec(str){
    let newstr = str.split('').reverse()
    let converter = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,'A':10,'B':11,'C':12,'D':13,'E':14,'F':15}
    let result = 0;
    for(let i=0;i<str.length;i++){
        result += (converter[newstr[i]]*Math.pow(16, i))
    }
    return result;
}


const hex2dec = (str) => {
    let result = 0;
    let conversionTable = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, "A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15 };
    let exponent = str.length - 1;

    for (let i = 0; i < str.length; i++) {
        result += conversionTable[str[i]] * (16 ** exponent);
        exponent--
    }

    return result;
}


const hex2dec = str => {
    let result = 0

    for(i = 0; i < str.length; i++) {
        if(str[i] == "A"){
            result += 10 * (16 ** (str.length-i-1))
        }
        else if(str[i] == "B"){
            result += 11 * (16 ** (str.length-i-1))
        }
        else if(str[i] == "C"){
            result += 12 * (16 ** (str.length-i-1))
        }
        else if(str[i] == "D"){
            result += 13 * (16 ** (str.length-i-1))
        }
        else if(str[i] == "E"){
            result += 14 * (16 ** (str.length-i-1))
        }
        else if(str[i] == "F"){
            result += 15 * (16 ** (str.length-i-1))
        }
        else{
            result += str[i] * (16 ** (str.length-i-1))
        }
    }
    return result
}
console.log(hex2dec("2DC"))
console.log(hex2dec("4DE2C"))
console.log(hex2dec("A2D2"))


const hex2dec = (str) => {
    let conversionString = '0123456789ABCDEF';
    let result =0;
    let exponent = 0;


    for (let i = str.length - 1; i >= 0; i--) {
        conversionString[str[i]]
        let multiplier = conversionString.indexOf(str[i])
        // let multiplier = conversionString.splice(str[i])
        result +=( multiplier * 16 ** exponent);
        exponent++;
    }
    // 

    return result

}