function strToWordArr(str){
    let result = [];
    //your code here

    let word = '';
    for(let i = 0; i<str.length; i++){
        //if the current value is an empty space
        if(str[i] === ' '){
            if(word.length>0){
                result.push(word)
            }
            word = '';
        }else{
            word += str[i]
        }
    }

    if(word.length> 0){
        result.push(word)
    }

    return result;

}



console.log(strToWordArr("  Welcome  to week    two!"    )) //["Welcome", "to", "week", "two!"]

/*
word= 'two!'
result = ['Welcome', 'to', 'week',  ]

*/