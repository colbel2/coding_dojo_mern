

//create a function that accepts 2 already sorted arrays and combines them into one sorted array and returns the sorted array
function combine(arr1, arr2){
    let result = []

    //hint: create two variables to keep track of index numbers of each respective arrays
    let i = 0;
    let j = 0;

    while(i<arr1.length && j<arr2.length){
        //compare the values between each of the input arr at their respective index and push the value that is smaller. Whichever array you push the value from, that is the array whose index we have to increment up by 1
        if(arr1[i]< arr2[j]){
            result.push(arr1[i])
            i++
        }
        else if(arr2[j]< arr1[i]){
            result.push(arr2[j])
            j++
        }
        else{
            result.push(arr2[j])
            result.push(arr1[i])
            i++
            j++
        }
    }
    while(i<arr1.length){ //this means the second array has values left over we need to put into result
        result.push(arr1[i])
        i++
    }
    
    while(j<arr2.length){ //this means the second array has values left over we need to put into result
        result.push(arr2[j])
        j++
    }
    // console.log({result,i,j})
    return result;

}

// let x = [-100,5,6,6,8,14,200]
// let y = [-100, 6, 9, 10, 15,20,22,28]

// let a = [5]
// let b = [3]
// console.log(combine(a,b))


let arr1 = [4,8,2,5,9,0,1,12,-1]


const mergeSort = (arr)=>{
    // console.log(arr)
    //we stop breaking the array down in halfs if the array length is 1 or less- BASE CASE
    if(arr.length<= 1){
        return arr;
    }else{
        //figure out the midpoint
        let mid = Math.floor(arr.length/2)
        let leftHalf = arr.slice(0,mid)
        let rightHalf = arr.slice(mid,arr.length)
        let left = mergeSort(leftHalf)
        let right = mergeSort(rightHalf)
        // console.log({left, right})
        return combine(left, right)
    }
}

console.log(mergeSort(arr1))









[4,8,2,5,9,0,1,12,-1]
//select the pivot index to be 0 and pivot value to be arr[0]
//iterate from index 1 and look for how many values are less than 4
    //whenever you find a value less than 4, increment the count 


