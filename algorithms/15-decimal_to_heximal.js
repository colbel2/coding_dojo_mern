//https://www.rapidtables.com/convert/number/decimal-to-hex.html


const dec2hex = (num)=>{
    //hint--use this conversion string to match up the index number with the hex number for your remainders
    //hint- you will need to store remainders somewhere
    //let conversionString = "0123456789ABCDEF"



}



console.log(dec2hex(35631)) //8B2F

function decToHex(num) {
    let conversionString = '0123456789ABCDEF'
    let remainders = [];
    let result = '';

    while (num > 0) {

        let remainder = num % 16;
        // console.log(remainder)
        remainders.push(remainder);
         // console.log(remainders)

        num = Math.floor(num / 16);

    }

    for (let i = remainders.length -1; i >= 0; i-- ) {
        
        conversionString[remainders[i]]

        // console.log(conversionString[remainders[i]])

        result+=conversionString[remainders[i]]
    }

    return result

}


console.log(decToHex(35631)) //8B2F


const base10convert = (num, base) => {
  
    let output = ''
    while(num > 0) {
      let quo = Math.floor(num/base.length)
      let rem = num%base.length
      // console.log('quo', quo, 'rem', rem)
      output = (base[rem]) + output;
      num = quo
    }
    console.log(output);
  }
  
  let hexdec = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
  base10convert(30, hexdec) // 1e
  
  let bi = [0,1]
  base10convert(4, bi) // 100
  
  let sept = [0,1,2,3,4,5,6]
  base10convert(22, sept) // 31


  function decToHex(number){
    let conversion = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let result = '';
    while(number/16>0){
        result = conversion[number%16] + result;
        number = Math.floor(number/16)
    }
    return result;
}



const dec2hex = (num) => {
    let result = '';
    let conversionTable = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" }
    let quotient = Math.floor(num/16);
    let remainder = num%16;
    
    while (quotient > 0){
        result += conversionTable[remainder]
        remainder = quotient%16
        quotient = Math.floor(quotient/16)
    }
    result += conversionTable[remainder]

    return result.split('').reverse().join('');
}


const dec2hex = num => {
    let array = []
    let result = ""
    while(num != 0){

        if(num%16<=9){
            array.push(num % 16)
        }
        else if (num%16==10){
                array.push("A")
        }
        else if (num%16==11){
                array.push("B")
        }
        else if (num%16==12){
                array.push("C")
        }
        else if (num%16==13){
                array.push("D")
        }
        else if (num%16==14){
                array.push("E")
        }
        else if (num%16==15){
                array.push("F")
        }
        num = Math.floor(num/16)
    }
    for(i=array.length-1;i>=0;i--){
        result += array[i]
    }
    return result
}

console.log(dec2hex(35631)) // 8B2F
console.log(dec2hex(28))