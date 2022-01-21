function strDecode(str){
    let result = '';
    //your code here
    let i = 0;
    while(i<str.length){
        let char = str[i];
        i++ //increment i b/c we know the next index after a letter has a number
        let numStr = '';

        //look ahead to find potentially multiple digit numbers after a letter
        while(i<str.length && !isNaN(str[i])){ //while the current element IS a number
            numStr += str[i]
            i++
        }

        //by the time the while loop is complete, we have the number collected in the variable numStr
        result += char.repeat(numStr)
    }

    return result;
}

console.log(strDecode("a2b4c12d1")) //"aabbbbccccccccccccd"

/*
result ='aabbbbccccccccccccd'
i=0->1->2->3->4->5->6->7->8->9
str.length = 9
char = a->b->c->d
numstr= '1'
*/